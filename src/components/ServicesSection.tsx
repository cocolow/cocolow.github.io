import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles } from "lucide-react";
import artwork01 from "@/assets/artwork-01.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Feather,
  ImageIcon,
  Palette,
  BookOpen,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
  {
    icon: Feather,
    title: "Custom Wedding Stationery",
    description:
      "Bespoke calligraphy invitations, place cards, signage, vow books, and day-of stationery crafted with care for your special occasion.",
    tags: ["Calligraphy", "Invitations", "Signage"],
    color: "from-watercolor-pink/30 to-watercolor-burgundy/20",
    badgeColor:
      "bg-watercolor-pink/15 text-foreground border-watercolor-pink/30",
    
  },
  {
    icon: ImageIcon,
    title: "Private Artwork",
    description:
      "Bespoke watercolour pieces — florals, landscapes, and calligraphy quotes or prints — made to commission for your home or as a meaningful gift.",
    tags: ["Watercolour", "Florals", "Landscapes"],
    color: "from-watercolor-purple/30 to-watercolor-blue/20",
    badgeColor:
      "bg-watercolor-purple/15 text-foreground border-watercolor-purple/30",
    
  },
  {
    icon: Palette,
    title: "Live Painting & Art Booths",
    description:
      "On-site live painting at weddings and events, plus interactive art booth experiences where guests can engage with the creative process.",
    tags: ["Live Events", "Interactive", "Weddings"],
    color: "from-watercolor-orange/30 to-watercolor-yellow/20",
    badgeColor:
      "bg-watercolor-orange/15 text-foreground border-watercolor-orange/30",
    
  },
  {
    icon: BookOpen,
    title: "Workshops & Teaching",
    description:
      "Calligraphy and watercolour workshops for all levels — corporate team sessions, children's classes (50+ students taught), and senior-friendly sessions.",
    tags: ["Corporate", "Children", "Seniors"],
    color: "from-watercolor-green/30 to-watercolor-turquoise/20",
    badgeColor:
      "bg-watercolor-green/15 text-foreground border-watercolor-green/30",
    
  },
];

const steps = [
  { num: "01", label: "Enquire", desc: "Fill in the form below with your ideas and event details." },
  { num: "02", label: "Discuss & Quote", desc: "We chat through the scope, timeline, and a tailored quote is sent." },
  { num: "03", label: "Create", desc: "Coco brings your vision to life with regular progress updates." },
  { num: "04", label: "Deliver", desc: "Your finished piece is delivered digitally or shipped to your door." },
];

const faqs = [
  {
    q: "What is the typical turnaround time?",
    a: "Turnaround varies by project. Custom stationery orders typically take 2–4 weeks; individual artwork 1–3 weeks. Workshop bookings should be made at least 2 weeks in advance. Rush fees may apply for shorter timelines.",
  },
  {
    q: "What is the pricing range?",
    a: "Prices start from $60 per person for workshops, $80 for individual watercolour pieces, $150 for wedding stationery sets, and $400 for live event painting. Every project is unique — reach out for a personalised quote.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes! Physical artworks and stationery can be shipped internationally. Shipping costs are calculated at checkout and vary by destination. Digital files (high-res prints) are available for all artwork at no extra shipping cost.",
  },
  {
    q: "How many revisions are included?",
    a: "All commissions include up to two rounds of revisions. Additional revisions beyond that are quoted separately. For stationery, a digital proof is always shared before anything goes to print.",
  },
  {
    q: "What are the workshop group sizes?",
    a: "Workshops can accommodate groups from 5 to 50+ participants. Private one-on-one sessions are also available. Corporate and school workshops are customised to your team's needs and skill level.",
  },
];

export function ServicesSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to backend when ready
    setSubmitted(true);
  };

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            // What I Offer
          </p>
          <h2 className="font-mono-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Creative <span className="gradient-text">Services</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-32 bg-border" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            From wedding stationery and bespoke artwork to live event painting and
            art workshops — every piece is handcrafted with intention.
          </p>
        </div>

        {/* ── Featured Artwork ── */}
        <div className="mb-24 flex justify-center">
          <div className="relative">
            <div className="absolute -right-4 -top-5 z-20">
              <span className="sticker rotate-6 bg-watercolor-yellow/40 text-foreground">
                <Star className="mr-1 inline h-3 w-3" /> Handmade
              </span>
            </div>
            <div className="absolute -left-4 bottom-4 z-20">
              <span className="sticker -rotate-3 bg-watercolor-pink/30 text-foreground">
                <Sparkles className="mr-1 inline h-3 w-3" /> Original
              </span>
            </div>
            <div className="retro-window border-[3px] border-foreground/80" style={{ transform: "rotate(-1deg)" }}>
              <div className="retro-titlebar">
                <span className="text-muted-foreground">artwork_01.png</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              <div className="aspect-[4/5] w-64 sm:w-72 lg:w-80 overflow-hidden border-t-[3px] border-foreground/80">
                <img src={artwork01} alt="Featured watercolor artwork by Coco" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="mb-24 grid gap-5 sm:grid-cols-2">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="retro-window group transition-all duration-200 hover:shadow-[5px_5px_0px_hsl(var(--foreground)/0.12)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
              style={{ transform: `rotate(${i % 2 === 0 ? -0.4 : 0.4}deg)` }}
            >
              <div className="retro-titlebar">
                <span className="text-muted-foreground">service_{String(i + 1).padStart(2, "0")}.txt</span>
                <div className="retro-btn-group">
                  <span className="retro-btn-dot">_</span>
                  <span className="retro-btn-dot">□</span>
                  <span className="retro-btn-dot">×</span>
                </div>
              </div>
              {/* Colour strip */}
              <div className={`h-2 bg-gradient-to-r ${svc.color}`} />
              <div className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center border-2 border-border bg-gradient-to-br ${svc.color}`}>
                    <svc.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <h3 className="font-mono-heading text-sm font-bold text-card-foreground">
                    {svc.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {svc.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {svc.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className={`font-mono-heading text-[10px] uppercase tracking-wider ${svc.badgeColor}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Process Timeline ── */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              // How It Works
            </p>
            <h3 className="font-mono-heading text-2xl font-bold tracking-tight">
              The <span className="gradient-text">Process</span>
            </h3>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-4">
            {/* Connecting line — desktop only */}
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border sm:block" style={{ zIndex: 0 }} />
            {steps.map((step, i) => (
              <div key={step.num} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center border-2 border-border bg-card shadow-[3px_3px_0px_hsl(var(--foreground)/0.12)]">
                  <span className="font-pixel text-2xl gradient-text">{step.num}</span>
                </div>
                <div className="flex items-center gap-1 mb-1">
                  <h4 className="font-mono-heading text-sm font-bold">{step.label}</h4>
                  {i < steps.length - 1 && (
                    <ArrowRight className="h-3 w-3 text-muted-foreground sm:hidden" />
                  )}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              // Kind Words
            </p>
            <h3 className="font-mono-heading text-2xl font-bold tracking-tight">
              Client <span className="gradient-text">Reviews</span>
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Coco's calligraphy work for our wedding was absolutely stunning. Every guest commented on the invitations — they set the tone for the entire celebration.",
                name: "Sarah & James L.",
                context: "Wedding Stationery, 2025",
              },
              {
                quote: "The live painting at our corporate gala was the highlight of the evening. Watching the artwork come to life in real-time captivated everyone in the room.",
                name: "Michelle T.",
                context: "Live Event Painting",
              },
              {
                quote: "Our team workshop was such a refreshing experience. Coco made calligraphy feel approachable for complete beginners — we left with skills and artwork we're proud of.",
                name: "David K.",
                context: "Corporate Workshop, 15 pax",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="retro-window group transition-all duration-200 hover:shadow-[5px_5px_0px_hsl(var(--foreground)/0.12)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
              >
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">review_{String(i + 1).padStart(2, "0")}.txt</span>
                  <div className="retro-btn-group">
                    <span className="retro-btn-dot">_</span>
                    <span className="retro-btn-dot">□</span>
                    <span className="retro-btn-dot">×</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <span className="font-pixel text-2xl gradient-text">"</span>
                  <p className="text-sm leading-relaxed text-muted-foreground italic -mt-4">
                    {t.quote}
                  </p>
                  <div className="mt-auto pt-2 border-t border-border">
                    <p className="font-mono-heading text-xs font-bold text-card-foreground">{t.name}</p>
                    <p className="font-mono-heading text-[10px] text-muted-foreground">{t.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured ── */}
        <div className="mb-24">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              // Press & Mentions
            </p>
            <h3 className="font-mono-heading text-2xl font-bold tracking-tight">
              Featured <span className="gradient-text">In</span>
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Travel Yukon",
                description: "Arts & culture spotlight featuring Coco's live painting and calligraphy work in Whitehorse.",
                url: "https://www.travelyukon.com/en/see-and-do/activities/arts-whitehorse",
              },
            ].map((feature, i) => (
              <a
                key={i}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-window group transition-all duration-200 hover:shadow-[5px_5px_0px_hsl(var(--foreground)/0.12)] hover:-translate-x-[1px] hover:-translate-y-[1px] block"
              >
                <div className="retro-titlebar">
                  <span className="text-muted-foreground">feature_{String(i + 1).padStart(2, "0")}.txt</span>
                  <div className="retro-btn-group">
                    <span className="retro-btn-dot">_</span>
                    <span className="retro-btn-dot">□</span>
                    <span className="retro-btn-dot">×</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <h4 className="font-mono-heading text-sm font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 font-mono-heading text-[10px] font-bold uppercase tracking-wider text-primary">
                    Read More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-24 mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              // Common Questions
            </p>
            <h3 className="font-mono-heading text-2xl font-bold tracking-tight">
              FAQ
            </h3>
          </div>
          <div className="retro-window">
            <div className="retro-titlebar">
              <span className="text-muted-foreground">faq.txt</span>
              <div className="retro-btn-group">
                <span className="retro-btn-dot">_</span>
                <span className="retro-btn-dot">□</span>
                <span className="retro-btn-dot">×</span>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="font-mono-heading text-xs font-bold uppercase tracking-wide text-left hover:no-underline hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* ── Enquiry Form ── */}
        <div id="book-a-service" className="mx-auto max-w-xl">
          <div className="mb-10 text-center">
            <p className="mb-2 font-mono-heading text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              // Get In Touch
            </p>
            <h3 className="font-mono-heading text-2xl font-bold tracking-tight">
              Book a <span className="gradient-text">Service</span>
            </h3>
          </div>
          <div className="retro-window">
            <div className="retro-titlebar">
              <span className="text-muted-foreground">enquiry_form.txt</span>
              <div className="retro-btn-group">
                <span className="retro-btn-dot">_</span>
                <span className="retro-btn-dot">□</span>
                <span className="retro-btn-dot">×</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <span className="font-pixel text-4xl gradient-text">✦</span>
                  <h4 className="font-mono-heading text-lg font-bold">
                    Message Received!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. Coco will get back to you within 2–3 business days.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 font-mono-heading text-xs font-bold uppercase tracking-wider"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", serviceType: "", eventDate: "", message: "" });
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
                        <SelectItem value="wedding-stationery">Custom Wedding Stationery</SelectItem>
                        <SelectItem value="private-artwork">Private Artwork</SelectItem>
                        <SelectItem value="live-painting">Live Painting & Art Booths</SelectItem>
                        <SelectItem value="workshops">Workshops & Teaching</SelectItem>
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
          </div>
        </div>

      </div>
    </section>
  );
}
