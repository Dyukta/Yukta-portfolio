import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSection } from "@/hooks/useScrollSection";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export function Navbar() {
  const active = useScrollSection();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10 backdrop-blur-sm overflow-x-hidden"
      style={{ backgroundColor: "rgba(247, 233, 218, 0.8)" }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5">
        <div className="flex items-center justify-between min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden shrink-0 text-ink"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <a
              href="#home"
              className="font-caveat text-2xl font-bold text-pink italic leading-none whitespace-nowrap"
            >
              Yuki<span className="text-ink not-italic">.</span>
            </a>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative font-shadows text-lg transition-colors duration-150",
                      isActive
                        ? "text-pink"
                        : "text-ink/50 hover:text-ink"
                    )}
                  >
                    {link.label}

                    <span className="absolute left-0 -bottom-0.5 h-0.5 w-full overflow-hidden rounded-full">
                      <motion.span
                        className="block h-full bg-pink"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? "100%" : "0%" }}
                        transition={{ duration: 0.25 }}
                      />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            style={{ backgroundColor: "oklch(82.1% 0.142 82.3)" }}
            className="hidden md:inline-flex shrink-0 pill border-2 border-ink/60 font-shadows text-ink"
          >
            say hi →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "font-shadows text-2xl transition-colors",
                      isActive
                        ? "text-pink"
                        : "text-ink/70 hover:text-ink"
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={closeMenu}
                style={{ backgroundColor: "oklch(82.1% 0.142 82.3)" }}
                className="pill mt-2 border-2 border-ink/60 font-shadows text-center text-ink"
              >
                say hi →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}