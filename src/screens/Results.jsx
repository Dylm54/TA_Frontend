import { useScan } from "../context/ScanContext";
import { SEVERITY_CONFIG, SEVERITY_STEPS } from "../constants/SeverityConfig";
import SeverityBar from "../components/SeverityBar";
import StatCard from "../components/StatCard";
import { IcoInfo, IcoReset } from "../components/icons";
import styles from "../styles/Results.module.css";

export default function Results() {
  const { apiResult, reset } = useScan();
  const cfg = SEVERITY_CONFIG[apiResult?.severity] ?? SEVERITY_CONFIG["Moderate"];

  return (
    <div className={styles.wrap}>
      {/* Legend strip */}
      <div className={`legend-strip ${styles.legendStrip}`}>
        <span className={styles.legendLabel}>Hayashi Scale</span>
        <div className={`legend-chips ${styles.legendChips}`}>
          {SEVERITY_STEPS.map((s) => (
            <span key={s} className={styles.legendChip}>
              <span
                className={styles.legendDot}
                style={{ background: SEVERITY_CONFIG[s].color }}
              />
              {`${s} (${SEVERITY_CONFIG[s].rule})`}
            </span>
          ))}
        </div>
      </div>

      <div className={`result-grid ${styles.grid}`}>
        {/* Image panel */}
        <div className={styles.imagePanel}>
          <div className={styles.imgBar}>
            <span className={styles.imgBarLabel}>YOUR DETECTED ACNE RESULT</span>
          </div>
          <img
            src={`data:image/jpeg;base64,${apiResult.image}`}
            alt="Detection result"
            className={styles.resultImg}
          />
        </div>

        {/* Results panel */}
        <div className={styles.resultsPanel}>
          {/* Header */}
          <div className={styles.panelHeader}>
            <span className={styles.panelTitle}>Scan Results</span>
            <span
              className={styles.sevBadge}
              style={{
                background: cfg.bg,
                border: `1px solid ${cfg.border}`,
                color: cfg.text,
              }}
            >
              {apiResult.severity === "Very Severe"
                ? "⚠ VERY SEVERE"
                : apiResult.severity === "Severe"
                ? "⚠ SEVERE"
                : apiResult.severity.toUpperCase()}
            </span>
          </div>

          {/* Severity bar */}
          <div>
            <p className={styles.sectionLabel}>HAYASHI SEVERITY SCALE</p>
            <SeverityBar activeStep={cfg.step} />
          </div>

          {/* Stat grid */}
          <div className={`stat-grid ${styles.statGrid}`}>
            <StatCard label="TOTAL LESIONS" value={apiResult.lesion_count} />
            <StatCard label="SCALE GRADE"   value={cfg.level} />
            <StatCard label="LESION RANGE"  value={cfg.range} />
            <StatCard label="SEVERITY"      value={apiResult.severity} color={cfg.color} />
          </div>

          {/* Classification detail */}
          <div
            className={styles.detailBox}
            style={{
              background: cfg.bg,
              border: `1px solid ${cfg.border}`,
            }}
          >
            <div className={styles.detailHeader}>
              <IcoInfo />
              <span className={styles.detailTitle} style={{ color: cfg.color }}>
                Classification Details
              </span>
            </div>
            <p className={styles.detailText}>{cfg.description}</p>
          </div>

          {/* Reset */}
          <button className={styles.btnPrimary} onClick={reset}>
            <IcoReset /> Analyze Another Image
          </button>
        </div>
      </div>
    </div>
  );
}