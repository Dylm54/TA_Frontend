import { useScan } from "../context/ScanContext";
import { IcoCheck } from "../components/icons";
import styles from "../styles/ScanComplete.module.css";

export default function ScanComplete() {
  const { go, reset, scanPreview } = useScan();

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Scan complete</h2>
      <div className={styles.imgWrap}>
        <img src={scanPreview} alt="scan" className={styles.img} />
        <div className={styles.checkBadge}>
          <IcoCheck size={18} color="#fff" />
        </div>
      </div>
      <button className={styles.btnPrimary} onClick={() => go("results")}>
        See my results
      </button>
      <button className={styles.backLink} onClick={reset}>
        I would like to scan again
      </button>
    </div>
  );
}