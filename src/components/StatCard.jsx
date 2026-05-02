import styles from "../styles/StatCard.module.css";

export default function StatCard({ label, value, color }) {
  return (
    <div className={styles.card}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value} style={{ color: color ?? "var(--c-text)" }}>
        {value}
      </span>
    </div>
  );
}