import { useState, useEffect } from "react";
import { useScan } from "../context/ScanContext";
import { useWebcam } from "../hooks/useWebcam";
import { predictAcne } from "../services/api";
import { IcoCamera } from "../components/icons";
import styles from "../styles/WebcamScan.module.css";

export default function WebcamScan() {
  const { go, setScanPreview, setApiResult, setApiError } = useScan();
  const { videoRef, canvasRef, cameraReady, error, setError, capture, restartCamera } = useWebcam();

  const [analyzing, setAnalyzing] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const doCapture = async () => {
    setAnalyzing(true);
    const result = await capture();
    if (!result) { setAnalyzing(false); return; }

    const { blob, previewUrl } = result;
    setScanPreview(previewUrl);

    try {
      const data = await predictAcne(new File([blob], "capture.jpg", { type: "image/jpeg" }));
      setApiResult(data);
      go("scan_complete");
    } catch {
      setError("Failed to connect to the server. Make sure the API is running.");
      setAnalyzing(false);
      restartCamera();
    }
  };

  const analysisOverlay = (
    <div className={styles.analysisOverlay}>
      <div className={styles.analysisInner}>
        <div className={styles.spinnerSm} />
        <span className={styles.analyzingText}>Analyzing data…</span>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className={styles.mobileOverlay}>
        <video ref={videoRef} autoPlay playsInline muted className={styles.mobileVideo} />

        <svg className={styles.mobileOvalSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <mask id="mob-mask">
              <rect width="100" height="100" fill="white" />
              <ellipse cx="50" cy="50" rx="46" ry="36" fill="black" />
            </mask>
          </defs>
          <rect width="100" height="100" fill="rgba(0,0,0,0.52)" mask="url(#mob-mask)" />
          <ellipse cx="50" cy="50" rx="46" ry="36" fill="none"
            stroke={cameraReady ? "var(--c-green)" : "rgba(255,255,255,0.55)"}
            strokeWidth="0.6" />
        </svg>

        {!analyzing && (
          <div className={styles.mobileGuide}>
            <span className={styles.mobileGuideText}>
              Posisikan wajah di dalam lingkaran, lalu tekan tombol capture
            </span>
          </div>
        )}

        {analyzing && analysisOverlay}

        <div className={styles.mobileControls}>
          {!analyzing
            ? <button className={styles.mobileLinkBtn} onClick={() => go("webcam_tips")}>← Back</button>
            : <div style={{ width: 60 }} />
          }
          <button
            className={styles.captureCircle}
            style={{ opacity: cameraReady && !analyzing ? 1 : 0.38 }}
            onClick={doCapture}
            disabled={!cameraReady || analyzing}
          >
            <div className={styles.captureCircleInner} />
          </button>
          <div style={{ width: 60 }} />
        </div>

        {error && <p className={styles.mobileErr}>{error}</p>}
        <canvas ref={canvasRef} style={{ display: "none" }} />
      </div>
    );
  }

  return (
    <div className={styles.desktopWrap}>
      <div className={styles.guideBar}>
        <span style={{ fontSize: 18 }}>👤</span>
        <span className={styles.guideText}>
          Position your face within the oval frame, make sure there is enough light, and then tap{" "}
          <strong style={{ color: "var(--c-text)" }}>Capture Photo</strong> when you're ready.
        </span>
      </div>

      <div className={styles.videoBox}>
        <video ref={videoRef} autoPlay playsInline muted className={styles.video} />
        <svg className={styles.ovalSvg} viewBox="0 0 640 480" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="desk-mask">
              <rect width="640" height="480" fill="white" />
              <ellipse cx="320" cy="235" rx="165" ry="210" fill="black" />
            </mask>
          </defs>
          <rect width="640" height="480" fill="rgba(0,0,0,0.45)" mask="url(#desk-mask)" />
          <ellipse cx="320" cy="235" rx="165" ry="210" fill="none"
            stroke={cameraReady ? "var(--c-green)" : "rgba(255,255,255,0.45)"}
            strokeWidth="2.5"
            strokeDasharray={cameraReady ? "" : "14 7"} />
        </svg>
        {analyzing && analysisOverlay}
      </div>

      <div className={styles.controls}>
        <button
          className={styles.captureBtn}
          style={{ opacity: cameraReady && !analyzing ? 1 : 0.38, cursor: cameraReady && !analyzing ? "pointer" : "not-allowed" }}
          onClick={doCapture}
          disabled={!cameraReady || analyzing}
        >
          <IcoCamera size={18} />
          {analyzing ? "Processing…" : cameraReady ? "Capture Photo" : "Turning the camera on…"}
        </button>
        {!analyzing && (
          <button className={styles.backLink} onClick={() => go("webcam_tips")}>← Back</button>
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}