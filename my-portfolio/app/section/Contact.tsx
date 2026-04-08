"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const container: Variants = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const listStagger: Variants = {
  hidden: {},
  visible: {
    transition: { when: "beforeChildren", staggerChildren: 0.09 },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const contact = {
  email: "abelyohanis016@gmail.com",
  phone: "+251 987049583",
  location: "Adama, Ethiopia",
  resumeUrl: "/ABEL-CV.pdf",
  githubUrl: "https://github.com/Abela16",
  linkedinUrl: "https://www.linkedin.com/in/abel-yohanis-9227b7357/",
};

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`);

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden px-5 pt-20 pb-32 md:pt-24 md:pb-44 min-h-screen"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/14 blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-28 bottom-24 h-80 w-80 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">05.</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <h2 className="text-3xl font-bold text-foreground md:text-6xl">
              Contact <span className="text-accent">Me</span>
            </h2>
            <span className="hidden h-px w-28 bg-border-subtle/70 md:block" />
          </div>
          <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            I&apos;m currently open to new opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          <motion.aside variants={fadeUp} className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">Let&apos;s work together</h3>
              <p className="text-sm leading-7 text-muted-foreground md:text-base">
                I&apos;m open to freelance work, collaborations, or full-time opportunities. If you have something in
                mind, feel free to reach out.
              </p>
            </div>

            <motion.div
              className="space-y-5"
              variants={listStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.div variants={itemFade} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-subtle bg-card/50 text-accent transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-[0_0_26px_rgba(1,181,209,0.14)]">
                  <Mail size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 block text-sm font-semibold text-foreground hover:text-accent transition-colors break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemFade} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-subtle bg-card/50 text-accent transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-[0_0_26px_rgba(1,181,209,0.14)]">
                  <Phone size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                    className="mt-1 block text-sm font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemFade} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-subtle bg-card/50 text-accent transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-[0_0_26px_rgba(1,181,209,0.14)]">
                  <MapPin size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Location</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{contact.location}</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Links</p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <a
                  href={contact.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-200 hover:-translate-y-0.5 underline-offset-4 hover:underline"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-200 hover:-translate-y-0.5 underline-offset-4 hover:underline"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-200 hover:-translate-y-0.5 underline-offset-4 hover:underline"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div variants={fadeUp}>
            <div className="rounded-2xl border border-border-subtle bg-card/60 backdrop-blur-sm p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      className="w-full rounded-2xl border border-border-subtle bg-background/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full rounded-2xl border border-border-subtle bg-background/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full resize-none rounded-2xl border border-border-subtle bg-background/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-accent/50 focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell me about your project…"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" as const }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm shadow-accent/10 hover:shadow-[0_0_32px_rgba(1,181,209,0.18)] transition-[box-shadow,filter]"
                  >
                    Send Message
                    <Send size={16} />
                  </motion.button>
                  <p className="text-xs leading-5 text-muted-foreground">Submitting opens your email client (mailto).</p>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

