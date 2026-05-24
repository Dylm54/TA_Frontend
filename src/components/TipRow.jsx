import styles from "../styles/TipRow.module.css";

export default function TipRow({ icon: Icon, label }) {
  return (
    <div className={styles.row}>
      <div className={styles.badge}>
        <Icon size={22} />
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}