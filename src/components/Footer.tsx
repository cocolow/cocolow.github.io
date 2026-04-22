import { LinkedInIcon, InstagramIcon, GithubIcon } from "@/design-system";
import { features } from "@/config/features";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  ...(features.showServices ? [{ label: "Services", href: "/services" }] : []),
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/yutinglow",
    label: "LinkedIn",
  },
  ...(features.showGithub
    ? [
        {
          icon: GithubIcon,
          href: "https://github.com/cocolow",
          label: "GitHub",
        },
      ]
    : []),
  {
    icon: InstagramIcon,
    href: "https://instagram.com/coconutcalligraphy",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card/50">
      <div className="container mx-auto px-4 py-10 lg:px-8">
        <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="relative z-10 text-center md:text-left">
            <a
              href="/"
              className="font-mono-heading text-xs font-bold uppercase tracking-widest text-foreground"
            >
              <span className="inline-block border-2 border-foreground px-3 py-1">
                COCO LOW
              </span>
            </a>
            <p className="mt-2 font-pixel text-base text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Quick Nav — absolutely centered on md+ so it aligns with the navbar nav regardless of side-element widths */}
          <div className="flex flex-wrap justify-center gap-0 md:pointer-events-none md:absolute md:inset-0 md:flex-row md:items-center md:justify-center">
            <div className="flex md:pointer-events-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono-heading border-r border-border px-5 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground first:border-l"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="relative z-10 flex gap-2">
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
