export const IcoCamera = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="7" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 10l5-3v10l-5-3V10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="9.5" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
  
  export const IcoUpload = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 4v12M8 8l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const IcoCheck = ({ size = 14, color = "#27c885" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 13l4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const IcoInfo = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="var(--c-orange)" strokeWidth="1.6" />
      <path d="M12 8v4M12 16h.01" stroke="var(--c-orange)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
  
  export const IcoReset = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M3 12a9 9 0 1 0 2.6-6.4L2 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  
  export const IcoArrow = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  export const IcoMakeup = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M10 9l2-4 2 4v3h-4V9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="8" y="12" width="8" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  export const IcoGlasses = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="6.5" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 14h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3 14l1.5-4M21 14l-1.5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );

  export const IcoSun = ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );