"use client";

import { motion } from "motion/react";

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto w-[90%] max-w-4xl text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
          className="space-y-6"
          whileHover={{ scale: 1.03 }}
        >
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            Punya ide atau butuh bantuan membangun sistem?
          </h2>

          {/* Subtext */}
          <p className="text-foreground/60 max-w-xl mx-auto">
            Saya terbuka untuk diskusi terkait pengembangan aplikasi, integrasi
            sistem, atau peluang kolaborasi lainnya.
          </p>

          {/* CTA */}
          <div className="rounded-3xl border border-white/20 bg-white/60 p-8 backdrop-blur-xl dark:bg-zinc-900/60">
            <a
              href="mailto:emailkamu@example.com"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
            >
              Kirim Email
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="rounded-full border border-black/20 px-6 py-3 text-sm transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>

          {/* Extra */}
          <p className="pt-4 text-xs text-foreground/50">
            Biasanya saya merespon dalam 1–2 hari kerja
          </p>
        </motion.div>
      </div>
    </section>
  );
}
