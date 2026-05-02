import { useState, useEffect } from "react";
import { useScan } from "../context/ScanContext";
import styles from "../styles/AnalyzingScreen.module.css";

export default function AnalyzingScreen() {
  const { uploadPreview } = useScan();
  const [step, setStep] = useState(0);

  const STEPS = [
    "Uploading image",
    "Detecting lesions",
    "Classifying severity",
    "Finalizing results",
  ];

  useEffect(() => {
    const iv = setInterval(
      () => setStep((s) => Math.min(s + 1, STEPS.length - 1)),
      700
    );
    return () => clearInterval(iv);
  }, []);

  return (
    <div className={styles.wrap}>
      {uploadPreview && (
        <img src={uploadPreview} alt="preview" className={styles.preview} />
      )}
      <div className={styles.card}>
        <div className={styles.spinnerLg} />
        <p className={styles.title}>Analyzing your skin scan</p>
        <div className={styles.stepRow}>
          {STEPS.map((s, i) => (
            <div key={i} className={styles.stepItem}>
              <div
                className={styles.stepDot}
                style={{
                  background: i <= step ? "var(--c-orange)" : "var(--c-surface-alt)",
                  border: `1.5px solid ${i <= step ? "var(--c-orange)" : "var(--c-border)"}`,
                }}
              />
              <span
                className={styles.stepLabel}
                style={{
                  color: i <= step ? "var(--c-orange)" : "var(--c-text-faint)",
                  fontWeight: i <= step ? 600 : 400,
                }}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}