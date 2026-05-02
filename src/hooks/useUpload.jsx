import { useRef } from "react";
import { useScan } from "../context/ScanContext";
import { predictAcne } from "../services/api";

export function useUpload() {
  const fileRef = useRef(null);
  const {
    go,
    setUploadFile,
    setUploadPreview,
    setScanPreview,
    setApiResult,
    setApiError,
    uploadFile,
    uploadPreview,
  } = useScan();

  const openPicker = () => fileRef.current?.click();

  const onFilePicked = (file) => {
    setUploadFile(file);
    setUploadPreview(URL.createObjectURL(file));
    go("upload_preview");
  };

  const onUploadConfirm = async () => {
    setScanPreview(uploadPreview);
    go("analyzing");
    try {
      const data = await predictAcne(uploadFile);
      setApiResult(data);
      go("scan_complete");
    } catch {
      setApiError("Failed to connect to the server. Make sure the API is running.");
      go("upload_preview");
    }
  };

  return { fileRef, openPicker, onFilePicked, onUploadConfirm };
}