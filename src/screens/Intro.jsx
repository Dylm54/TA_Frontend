import { useScan } from "../context/ScanContext";
import { IcoArrow } from "../components/icons";
import styles from "../styles/Intro.module.css";
import introImage from "../assets/intro.jpg"; 

const BULLETS = [
  "Automatic lesion detection from a single selfie",
  "Get a detailed skin report",
  "Understand your acne severity on the Hayashi scale",
];

export default function Intro() {
  const { go } = useScan();

  return (
    <div className={styles.wrap}>
      <div className={styles.heroVisual}>
      <img src={introImage} alt="AI skin analysis preview" className={styles.heroImg} /> 
      </div>

      <div className={styles.content}>
        {/* <div className={styles.chip}>AcneScan AI</div> */}
        <p className={styles.kicker}>Skin Analysis Tool</p>
        <h1 className={styles.h1}>
          Automated acne detection and severity classification
        </h1>
        <p className={styles.desc}>
        AcneScan AI detects acne lesions from your photo and classifies severity into four levels — mild, moderate, severe, and very severe — based on the Hayashi Criteria. This tool is intended for self-screening only, not as a substitute for professional medical diagnosis.
        </p>

        <button className={styles.cta} onClick={() => go("webcam_tips")}>
          Start Analysis <IcoArrow />
        </button>

        <ul className={styles.bulletList}>
          {BULLETS.map((b, i) => (
            <li key={i} className={styles.bulletItem}>
              <span className={styles.bulletBadge}>{i + 1}</span>
              <span className={styles.bulletText}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
