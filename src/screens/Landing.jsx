import { useScan } from "../context/ScanContext";
import { IcoCamera, IcoUpload, IcoArrow } from "../components/icons";
import styles from "../styles/Landing.module.css";

export default function Landing() {
  const { go } = useScan();

  return (
    <div className={styles.wrap}>
      <button className={styles.back} onClick={() => go("intro")}>← Back</button>
      <div className={styles.hero}>
        <h1 className={styles.h1}>Choose how to scan</h1>
        <p className={styles.subtitle}>Pick a capture method to begin</p>
      </div>

      <div className={`landing-cards ${styles.cards}`}>
        <button
          className={`landing-card ${styles.card}`}
          style={{ borderTop: "4px solid var(--c-orange)" }}
          onClick={() => go("webcam_tips")}
        >
          <div className={styles.iconWrap} style={{ background: "var(--c-orange-light)", border: "1px solid var(--c-orange-border)" }}>
            <span style={{ color: "var(--c-orange)" }}><IcoCamera size={24} /></span>
          </div>
          <div className={styles.body}>
            <p className={styles.title}>Start Scan</p>
            <p className={styles.sub}>Use your webcam to capture a real-time photo of your face for analysis</p>
          </div>
          <div className={styles.cta} style={{ background: "var(--c-orange)", color: "#fff" }}>
            Start Scan <IcoArrow />
          </div>
        </button>

        <button
          className={`landing-card ${styles.card}`}
          style={{ borderTop: "4px solid var(--c-green)" }}
          onClick={() => go("upload_tips")}
        >
          <div className={styles.iconWrap} style={{ background: "var(--c-green-light)", border: "1px solid var(--c-green-border)" }}>
            <span style={{ color: "var(--c-green)" }}><IcoUpload size={24} /></span>
          </div>
          <div className={styles.body}>
            <p className={styles.title}>Upload a Selfie</p>
            <p className={styles.sub}>Upload an existing photo from your device for instant skin analysis</p>
          </div>
          <div className={styles.cta} style={{ background: "var(--c-green)", color: "#fff" }}>
            Upload Selfie <IcoArrow />
          </div>
        </button>
      </div>
    </div>
  );
}