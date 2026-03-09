import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to backend when ready
    setSubmitted(true);
  };

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
            Drop me a message.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <span className="font-pixel text-4xl gradient-text">✦</span>
                <h4 className="font-mono-heading text-lg font-bold">
                  Message Sent!
                </h4>
                <p className="text-sm text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="border-2 font-mono-heading text-xs font-bold uppercase tracking-wider"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", message: "" });
                  }}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-heading text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <Input
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, name: e.target.value }))
                      }
                      className="border border-border/50 bg-background rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-mono-heading text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      maxLength={255}
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((f) => ({ ...f, email: e.target.value }))
                      }
                      className="border border-border/50 bg-background rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono-heading text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <Textarea
                    required
                    maxLength={1000}
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((f) => ({ ...f, message: e.target.value }))
                    }
                    className="border border-border/50 bg-background rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-hero-bg border-0 font-mono-heading text-sm font-bold tracking-wider text-primary-foreground rounded-lg py-6"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Email reference */}
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:lowyuting@gmail.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="font-mono-heading text-sm">lowyuting@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
