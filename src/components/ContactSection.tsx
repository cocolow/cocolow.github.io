import { Mail } from "lucide-react";
import { LinkedInIcon, InstagramIcon } from "@/design-system";

const socials = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "in/yutinglow",
    href: "https://linkedin.com/in/yutinglow",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    handle: "@coconutcalligraphy",
    href: "https://www.instagram.com/coconutcalligraphy/?hl=en",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "lowyuting@gmail.com",
    href: "mailto:lowyuting@gmail.com",
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
            Find me on your favourite platform.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {socials.map(({ icon: Icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <div className="text-center">
                <p className="font-mono-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-mono-heading text-sm text-foreground">
                  {handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
