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