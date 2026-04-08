"use client";

import { motion, type Variants } from "framer-motion";
import { Download } from "lucide-react";
import { Globe, Monitor, Server } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { when: "beforeChildren", staggerChildren: 0.1 } },
};


export default function AboutMe(){


    return(
        <div className="w-full overflow-hidden">
          <div className="mx-auto max-w-7xl px-5">
            {/* Header + bio card */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground md:text-6xl">
                  About <span className="text-accent">Me</span>
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                  I build scalable, user-centered web applications with a strong focus on clean UI,
                  maintainable code, and reliable backend systems.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-border-subtle bg-card/60 p-6 backdrop-blur-sm shadow-sm md:p-8"
              >
                <div className="space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                  <p>
                    I&apos;m Abel, a full-stack developer focused on building scalable, user-centered web applications.
                    I specialize in developing clean, maintainable code across both frontend and backend systems.
                  </p>
                  <p>
                    On the frontend, I work primarily with React and Next.js to create responsive, intuitive interfaces.
                    On the backend, I use Node.js and Express to design efficient, reliable APIs and application logic.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Role cards */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {[
                { Icon: Globe, label: "Web Developer" },
                { Icon: Monitor, label: "Frontend Developer" },
                { Icon: Server, label: "Backend Developer" },
              ].map(({ Icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.18, ease: "easeOut" as const }}
                  className="rounded-2xl border border-border-subtle bg-card/60 p-6 text-left backdrop-blur-sm shadow-sm
                             hover:border-accent/35 hover:shadow-[0_0_30px_rgba(1,181,209,0.10)] transition-[border-color,box-shadow]"
                >
                  <Icon size={26} className="text-accent" />
                  <p className="mt-3 text-base font-semibold text-foreground">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Focused on building polished, responsive experiences with production-ready code quality.
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                variants={fadeUp}
                href="/ABEL-CV.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-2xl bg-card px-6 py-3 text-sm font-semibold text-foreground
                           border border-border-subtle hover:border-accent/35 hover:shadow-[0_0_30px_rgba(1,181,209,0.12)] transition-[border-color,box-shadow]"
              >
                <Download size={18} className="text-accent" />
                Download CV
              </motion.a>
              <motion.a
                variants={fadeUp}
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" as const }}
                className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground
                           shadow-sm shadow-accent/10 hover:shadow-[0_0_32px_rgba(1,181,209,0.18)] transition-[box-shadow]"
              >
                Let&apos;s connect
              </motion.a>
            </motion.div>
          </div>
        </div>
    )
}       