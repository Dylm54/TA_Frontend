import { useScan } from "../context/ScanContext";
import TipRow from "../components/TipRow";
import { IcoCamera, IcoUpload } from "../components/icons";
import { TIPS } from "../constants/tips.js";
import styles from "../styles/TipsScreen.module.css";

export default function TipsScreen({ mode }) {
  const { go } = useScan();

  const isWebcam = mode === "webcam";
  const backScreen = isWebcam ? "landing" : "landing";
  const primaryScreen = isWebcam ? "webcam_scan" : "upload_pick";

  return (
    <div className={`tips-wrap ${styles.wrap}`}>
      <div className={styles.left}>
        <button className={styles.back} onClick={() => go(backScreen)}>← Back</button>
        <h2 className={styles.heading}>For best results,</h2>
        <div className={styles.tipsList}>
          {TIPS.map((t, i) => <TipRow key={i} {...t} />)}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.consentCard}>
          <p className={styles.consentText}>
            Your images are processed temporarily for analysis only. We do not
            collect, share, or store your personal photos in any database,
            ensuring your facial data remains private.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => go(primaryScreen)}>
            {isWebcam ? <><IcoCamera /> Start scan</> : <><IcoUpload /> Select a file</>}
          </button>
          {isWebcam && (
            <button className={styles.btnGhost} onClick={() => go("upload_tips")}>
              <IcoUpload /> Upload a selfie
            </button>
          )}
        </div>
      </div>
    </div>
  );
}