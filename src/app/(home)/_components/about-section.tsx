"use client";

import { motion } from "motion/react";

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

const stacks = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker"],
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={spring}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold">Tentang Saya</h2>

            <p className="text-foreground/70">
              Saya fokus membangun aplikasi web modern dengan performa tinggi,
              struktur yang rapi, dan pengalaman pengguna yang sederhana namun
              efektif.
            </p>

            <p className="text-foreground/70">
              Saya tertarik pada bagaimana sistem bekerja di balik layar— mulai
              dari pengolahan data, integrasi API, hingga memastikan aplikasi
              tetap scalable dan maintainable.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={spring}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: "System Thinking",
                  desc: "Mendesain solusi yang scalable dan terstruktur",
                },
                {
                  title: "Clean Code",
                  desc: "Kode yang mudah dibaca dan dipelihara",
                },
                {
                  title: "User Focused",
                  desc: "Pengalaman pengguna yang intuitif",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ...spring, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/20 bg-white/60 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60"
                >
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-sm text-foreground/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* STACK */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={spring}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/20 bg-white/60 p-5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60"
            >
              <h3 className="text-sm font-medium mb-4">Tech Stack</h3>

              <div className="grid grid-cols-2 gap-4">
                {stacks.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs text-foreground/50 mb-2">
                      {group.title}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/5 px-2 py-1 text-xs dark:bg-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
