export const SEVERITY_CONFIG = {
    Mild: {
      color: "#27c885",
      bg: "rgba(39,200,133,0.10)",
      border: "rgba(39,200,133,0.25)",
      text: "#1a9e6a",
      step: 0,
      range: "0–5",
      level: "Level 0",
      rule: "0–5 lesions",
      description:
        "The detected lesion count suggests a mild acne condition, corresponding to Level 0 on the Hayashi Scale (approximately 0–5 lesions). This stage is typically characterized by minimal inflammatory activity. Results are automatically generated and may vary depending on image quality and lighting conditions.",
    },
    Moderate: {
      color: "#f5a623",
      bg: "rgba(245,166,35,0.10)",
      border: "rgba(245,166,35,0.28)",
      text: "#c47d00",
      step: 1,
      range: "6–20",
      level: "Level 1",
      rule: "6–20 lesions",
      description:
        "The detected lesion count suggests a moderate acne condition, corresponding to Level 1 on the Hayashi Scale (approximately 6–20 lesions). This indicates a noticeable inflammatory response. Results are automatically generated and may vary depending on image quality and lighting conditions. Professional evaluation is recommended for accurate diagnosis.",
    },
    Severe: {
      color: "#fc7e3d",
      bg: "rgba(252,126,61,0.10)",
      border: "rgba(252,126,61,0.25)",
      text: "#c45e1e",
      step: 2,
      range: "21–50",
      level: "Level 2",
      rule: "21–50 lesions",
      description:
        "The detected lesion count suggests a severe acne condition, corresponding to Level 2 on the Hayashi Scale (approximately 21–50 lesions). This level indicates a significant inflammatory response. Results are automatically generated and may vary depending on image quality and lighting conditions. Clinical consultation is strongly recommended.",
    },
    "Very Severe": {
      color: "#e03e3e",
      bg: "rgba(224,62,62,0.08)",
      border: "rgba(224,62,62,0.25)",
      text: "#b82020",
      step: 3,
      range: "> 50",
      level: "Level 3",
      rule: ">50 lesions",
      description:
        "The detected lesion count suggests a very severe acne condition, corresponding to Level 3 on the Hayashi Scale (more than 50 lesions). This indicates a high level of inflammatory activity. Results are automatically generated and may vary depending on image quality and lighting conditions. Immediate professional evaluation is advised.",
    },
  };
  
  export const SEVERITY_STEPS = ["Mild", "Moderate", "Severe", "Very Severe"];