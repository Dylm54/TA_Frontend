import styles from "../styles/TipRow.module.css";

export default function TipRow({ emoji, label }) {
  return (
    <div className={styles.row}>
      <div className={styles.badge}>{emoji}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}