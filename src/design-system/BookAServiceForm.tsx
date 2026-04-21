import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { RetroWindow } from "./RetroWindow";

type BookAServiceFormData = {
  name: string;
  email: string;
  serviceType: string;
  eventDate: string;
  message: string;
};

type BookAServiceFormProps = {
  onSubmit?: (data: BookAServiceFormData) => void;
};

const emptyForm: BookAServiceFormData = {
  name: "",
  email: "",
  serviceType: "",
  eventDate: "",
  message: "",
};

export function BookAServiceForm({ onSubmit }: BookAServiceFormProps) {
  const [formData, setFormData] = useState<BookAServiceFormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    setSubmitted(true);
  };

  return (
    <RetroWindow title="enquiry_form.txt">
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="font-pixel text-4xl gradient-text">✦</span>
            <h4 className="font-mono-heading text-lg font-bold">
              Message Received!
            </h4>
            <p className="text-sm text-muted-foreground">
              Thank you for reaching out. Coco will get back to you within 2–3
              business days.
            </p>
            <Button
              variant="outline"
              className="border-2 font-mono-heading text-xs font-bold uppercase tracking-wider"
              onClick={() => {
                setSubmitted(false);
                setFormData(emptyForm);
              }}
            >
              Send Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Name *
                </label>
                <Input
                  required
                  maxLength={100}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, name: e.target.value }))
                  }
                  className="border-2 border-border font-mono-heading text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Email *
                </label>
                <Input
                  required
                  type="email"
                  maxLength={255}
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((f) => ({ ...f, email: e.target.value }))
                  }
                  className="border-2 border-border font-mono-heading text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Service Type *
              </label>
              <Select
                required
                value={formData.serviceType}
                onValueChange={(v) =>
                  setFormData((f) => ({ ...f, serviceType: v }))
                }
              >
                <SelectTrigger className="border-2 border-border font-mono-heading text-sm">
                  <SelectValue placeholder="Select a service…" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding-stationery">
                    Custom Wedding Stationery
                  </SelectItem>
                  <SelectItem value="private-artwork">
                    Private Artwork
                  </SelectItem>
                  <SelectItem value="live-painting">
                    Live Painting & Art Booths
                  </SelectItem>
                  <SelectItem value="workshops">
                    Workshops & Teaching
                  </SelectItem>
                  <SelectItem value="other">Other / Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Event / Delivery Date (if applicable)
              </label>
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, eventDate: e.target.value }))
                }
                className="border-2 border-border font-mono-heading text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono-heading text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Tell Me About Your Project *
              </label>
              <Textarea
                required
                maxLength={1000}
                rows={4}
                placeholder="Describe your vision, inspiration, size, colours, quantities…"
                value={formData.message}
                onChange={(e) =>
                  setFormData((f) => ({ ...f, message: e.target.value }))
                }
                className="border-2 border-border font-mono-heading text-sm resize-none"
              />
              <p className="font-mono-heading text-[10px] text-muted-foreground text-right">
                {formData.message.length}/1000
              </p>
            </div>

            <Button
              type="submit"
              disabled={!formData.serviceType}
              className="gradient-hero-bg border-0 font-mono-heading text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-[3px_3px_0px_hsl(var(--foreground)/0.15)] transition-all hover:shadow-[1px_1px_0px_hsl(var(--foreground)/0.15)] hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-50"
            >
              Send Enquiry
              <Send className="ml-2 h-3.5 w-3.5" />
            </Button>
          </form>
        )}
      </div>
    </RetroWindow>
  );
}
