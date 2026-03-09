import { Linkedin, Github, Instagram } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Art Shop", href: "#shop" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card/50">
      <div className="container mx-auto px-4 py-10 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className="font-mono-heading text-xs font-bold uppercase tracking-widest text-foreground"
            >
              <span className="inline-block border-2 border-foreground px-3 py-1">
                Portfolio
              </span>
            </a>
            <p className="mt-2 font-pixel text-base text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border-r border-border px-4 py-2 font-mono-heading text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors first:border-l hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-border p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
