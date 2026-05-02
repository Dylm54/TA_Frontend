import { useScan } from "../context/ScanContext";
import { useUpload } from "../hooks/useUpload";
import { IcoUpload } from "../components/icons";
import styles from "../styles/UploadPreview.module.css";

export default function UploadPreview() {
  const { go, uploadPreview } = useScan();
  const { onUploadConfirm } = useUpload();

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Chosen Selfie</h2>
      <img src={uploadPreview} alt="chosen selfie" className={styles.img} />
      <button className={styles.btnPrimary} onClick={onUploadConfirm}>
        <IcoUpload /> Upload Selfie
      </button>
      <button className={styles.backLink} onClick={() => go("upload_pick")}>
        Select a different photo
      </button>
    </div>
  );
}