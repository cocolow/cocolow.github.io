import { useState } from "react";
import { Menu, X, Sun, Moon, Linkedin, Github, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "/projects" },
  { label: "Commissions", href: "#commissions" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-8">
        {/* Logo — retro style */}
        <a href="/" className="font-mono-heading text-sm font-bold uppercase tracking-widest text-foreground">
          <span className="inline-block border-2 border-foreground px-3 py-1">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-0 md:flex">
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

        {/* Desktop Right */}
        <div className="hidden items-center gap-1 md:flex">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
          <Button
            variant="ghost"
            size="icon"
            className="ml-1 border border-border"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="border border-border"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" className="border border-border" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden border-b-2 border-border bg-background transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-80 py-2" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto flex flex-col px-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono-heading border-b border-border px-4 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3 px-4 pb-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
