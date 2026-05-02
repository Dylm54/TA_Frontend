import { SEVERITY_STEPS, SEVERITY_CONFIG } from "../constants/severityConfig";
import styles from "../styles/SeverityBar.module.css";

export default function SeverityBar({ activeStep }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {SEVERITY_STEPS.map((s, i) => (
          <div
            key={s}
            className={styles.segment}
            style={{ background: i <= activeStep ? SEVERITY_CONFIG[s].color : "var(--c-surface-alt)" }}
          />
        ))}
      </div>
      <div className={styles.labels}>
        {SEVERITY_STEPS.map((s, i) => (
          <span
            key={s}
            className={styles.label}
            style={{
              color: i === activeStep ? SEVERITY_CONFIG[s].color : "var(--c-text-sub)",
              fontWeight: i === activeStep ? 700 : 400,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}