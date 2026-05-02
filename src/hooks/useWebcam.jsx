import { useRef, useState, useEffect } from "react";

export function useWebcam() {
  const videoRef    = useRef(null);
  const canvasRef   = useRef(null);
  const streamRef   = useRef(null);
  const capturedRef = useRef(false);

  const [cameraReady, setCameraReady] = useState(false);
  const [error, setError]             = useState(null);

  useEffect(() => {
    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } } })
      .then((stream) => {
        if (cancelled) { stream.getTracks().forEach((t) => t.stop()); return; }
        streamRef.current = stream;
        requestAnimationFrame(() => {
          if (videoRef.current && !cancelled) {
            videoRef.current.srcObject = stream;
            videoRef.current.play().catch(() => {});
            videoRef.current.onloadedmetadata = () => { if (!cancelled) setCameraReady(true); };
            if (videoRef.current.readyState >= 1) setCameraReady(true);
          }
        });
      })
      .catch(() => setError("Camera access denied. Please allow camera permission and refresh."));

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  /** Returns a Blob of the captured frame, or null on error */
  const capture = () =>
    new Promise((resolve) => {
      if (capturedRef.current || !cameraReady) return resolve(null);
      capturedRef.current = true;

      const canvas = canvasRef.current;
      const video  = videoRef.current;
      canvas.width  = video.videoWidth  || 640;
      canvas.height = video.videoHeight || 480;
      canvas.getContext("2d").drawImage(video, 0, 0);
      streamRef.current?.getTracks().forEach((t) => t.stop());

      const previewUrl = canvas.toDataURL("image/jpeg");
      canvas.toBlob((blob) => resolve({ blob, previewUrl }), "image/jpeg");
    });

  const restartCamera = () => {
    capturedRef.current = false;
    setCameraReady(false);
    setError(null);
    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then((s) => {
        streamRef.current = s;
        if (videoRef.current) {
          videoRef.current.srcObject = s;
          videoRef.current.play().catch(() => {});
        }
        setCameraReady(true);
      })
      .catch(() => setError("Camera access denied."));
  };

  return { videoRef, canvasRef, cameraReady, error, setError, capture, restartCamera };
}