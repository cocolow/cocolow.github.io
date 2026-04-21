import { Mail } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/design-system";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    handle: "lowyuting@gmail.com",
    href: "mailto:lowyuting@gmail.com",
  },

  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "linkedin.com/in/yutinglow",
    href: "https://www.linkedin.com/in/yutinglow",
  },

  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@coconutcalligraphy",
    href: "https://www.instagram.com/coconutcalligraphy/?hl=en",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Interested in working together or just want to say hello?
            <br />
            Reach out on any of the channels below.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <ul className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm transition-colors hover:border-foreground hover:bg-muted"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-border text-muted-foreground transition-colors group-hover:border-foreground group-hover:text-foreground">
                    <link.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="break-all font-mono-heading text-sm font-semibold text-foreground">
                    {link.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
