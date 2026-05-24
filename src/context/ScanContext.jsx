import { createContext, useContext, useState } from "react";

const ScanContext = createContext(null);

export function ScanProvider({ children }) {
  const [screen, setScreen]           = useState("intro");
  const [uploadFile, setUploadFile]   = useState(null);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [scanPreview, setScanPreview] = useState(null);
  const [apiResult, setApiResult]     = useState(null);
  const [apiError, setApiError]       = useState(null);

  const go = (s) => {
    setApiError(null);
    setScreen(s);
  };

  const reset = () => {
    setUploadFile(null);
    setUploadPreview(null);
    setScanPreview(null);
    setApiResult(null);
    setApiError(null);
    setScreen("webcam_tips");
  };

  return (
    <ScanContext.Provider
      value={{
        screen, go, reset,
        uploadFile,   setUploadFile,
        uploadPreview, setUploadPreview,
        scanPreview,  setScanPreview,
        apiResult,    setApiResult,
        apiError,     setApiError,
      }}
    >
      {children}
    </ScanContext.Provider>
  );
}

export function useScan() {
  const ctx = useContext(ScanContext);
  if (!ctx) throw new Error("useScan must be used inside <ScanProvider>");
  return ctx;
}