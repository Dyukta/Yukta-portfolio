const footerLinks = [
  { label: "github", href: "https://github.com/Dyukta" },
  { label: "linkedin", href: "https://www.linkedin.com/in/yuktadewangan4" },
  { label: "email", href: "mailto:yuktaadewangan4@gmail.com" }
];

export function Footer() {
  return (
    <footer className="bg-ink/5 border-t border-ink/10 px-6 sm:px-8 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

      <ul className="flex items-center gap-6 sm:gap-8 justify-center">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-shadows text-base font-medium text-ink/90 hover:text-pink transition-colors duration-150 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-pink rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <p className="font-shadows text-xs text-ink/60 text-center sm:text-right">
        {"\u00A9 2026 yukta dewangan"}
      </p>
    </footer>
  );
}