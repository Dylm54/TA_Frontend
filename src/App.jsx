import { useEffect } from "react";
import { ScanProvider, useScan } from "./context/ScanContext";
import Navbar from "./components/Navbar";
import Intro from "./screens/Intro";
import Landing from "./screens/Landing";
import TipsScreen from "./screens/TipsScreen";
import WebcamScan from "./screens/WebcamScan";
import UploadPick from "./screens/UploadPick";
import UploadPreview from "./screens/UploadPreview";
import AnalyzingScreen from "./screens/AnalyzingScreen";
import ScanComplete from "./screens/ScanComplete";
import Results from "./screens/Results";
import styles from "./App.module.css";

function AppScreens() {
  const { screen, apiError, apiResult } = useScan();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [screen]);

  return (
    <div className={styles.root}>
      <Navbar />
      <main className={styles.main} key={screen}>
        {screen === "intro"          && <Intro />}
        {screen === "landing"        && <Landing />}
        {screen === "webcam_tips"    && <TipsScreen mode="webcam" />}
        {screen === "webcam_scan"    && <WebcamScan />}
        {screen === "upload_tips"    && <TipsScreen mode="upload" />}
        {screen === "upload_pick"    && <UploadPick />}
        {screen === "upload_preview" && <UploadPreview />}
        {screen === "analyzing"      && <AnalyzingScreen />}
        {screen === "scan_complete"  && <ScanComplete />}
        {screen === "results" && apiResult && <Results />}
        {apiError && <p className={styles.errorBanner}>{apiError}</p>}
      </main>
      <footer className={styles.footer}>
        <span>© 2026 AcneScan AI.</span>
        <span className={styles.footerDot}>·</span>
        <span>Not a substitute for professional medical advice.</span>
        <span className={styles.footerDot}>·</span>
        <span>
          Hayashi grading:{" "}
          <a
            className={styles.footerLink}
            href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1346-8138.2007.00403.x-i1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hayashi N. et al. (2008)
          </a>
        </span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ScanProvider>
      <AppScreens />
    </ScanProvider>
  );
}
