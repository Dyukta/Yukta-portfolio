export function EmptyState() {
  return (
    <div className="flex flex-col items-center text-center" style={{ color: "#598556" }}>
      <div className="relative mb-8">
        <span className="absolute -top-10 -left-14 text-3xl font-light opacity-50">+</span>
        <span className="absolute -top-6 right-0 text-2xl font-light opacity-40">+</span>
        <span className="absolute bottom-2 -left-10 text-2xl font-light opacity-35">+</span>

        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 32 Q12 22 20 22 L38 22 Q46 22 49 29 L49 32"
            stroke="currentColor" strokeWidth="1.8" fill="none"
          />
          <rect x="12" y="32" width="72" height="50" rx="4" stroke="currentColor" strokeWidth="1.8"/>
          <line x1="24" y1="50" x2="72" y2="50" stroke="currentColor" strokeWidth="1.4" strokeDasharray="6 4"/>
          <line x1="24" y1="63" x2="62" y2="63" stroke="currentColor" strokeWidth="1.4" strokeDasharray="6 4"/>
          <line x1="24" y1="74" x2="52" y2="74" stroke="currentColor" strokeWidth="1.4" strokeDasharray="6 4"/>
        </svg>
      </div>

      <p className="font-fraunces text-2xl mb-2" style={{ color: "#6b5c4c" }}>
        select a project to view details
      </p>
      <p className="text-sm font-shadows" style={{ color: "#8a7a6a" }}>
        tap a folder on the left ✿
      </p>
    </div>
  );
}