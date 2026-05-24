import { useScan } from "../context/ScanContext";
import { useUpload } from "../hooks/useUpload";
import TipRow from "../components/TipRow";
import { IcoUpload } from "../components/icons";
import { TIPS } from "../constants/tips";
import styles from "../styles/UploadPick.module.css";

export default function UploadPick() {
  const { go } = useScan();
  const { fileRef, onFilePicked } = useUpload();

  return (
    <div className={`tips-wrap ${styles.wrap}`}>
      <div className={styles.left}>
        <button className={styles.back} onClick={() => go("webcam_tips")}>← Back</button>
        <h2 className={styles.heading}>Upload Selfie</h2>
        <div className={styles.tipsList}>
          {TIPS.map((t, i) => <TipRow key={i} {...t} />)}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.uploadZone} onClick={() => fileRef.current?.click()}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" style={{ color: "var(--c-text-faint)" }}>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 15l5-5 4 4 3-3 6 5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          </svg>
          <p className={styles.uploadTitle}>Select a file to upload</p>
          <p className={styles.uploadSub}>JPEG or PNG · Max 10MB</p>
          <button
            className={styles.btnPrimary}
            onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
          >
            <IcoUpload /> Browse file
          </button>
        </div>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFilePicked(f);
          }}
        />
      </div>
    </div>
  );
}