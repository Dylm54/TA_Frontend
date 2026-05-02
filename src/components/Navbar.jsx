import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="var(--c-orange)" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="3.5" fill="var(--c-orange)" />
            <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21" stroke="var(--c-orange)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
        <span className={styles.logoText}>AcneScan AI</span>
      </div>
    </nav>
  );
}