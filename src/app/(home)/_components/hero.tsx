"use client";

import { motion, Transition } from "motion/react";
import Link from "next/link";
import CodeSnippetPreview from "./snippet-code";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const spring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background gradient blur */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-50 h-100 w-100 -translate-x-1/2 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute right-0 top-25 h-75 w-75 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="mx-auto w-[90%] max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <motion.p
              variants={item}
              transition={spring}
              className="text-sm text-foreground/60"
            >
              Halo, saya
            </motion.p>

            <motion.h1
              variants={item}
              transition={spring}
              className="text-4xl font-semibold leading-tight md:text-5xl"
            >
              Membangun produk digital yang{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                cepat, scalable, dan elegan
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              transition={spring}
              className="max-w-md text-foreground/70"
            >
              Saya fokus pada pengembangan web modern dengan performa tinggi, UI
              yang bersih, dan pengalaman pengguna yang intuitif.
            </motion.p>

            <motion.div
              variants={item}
              transition={spring}
              className="flex items-center gap-4"
            >
              <Link
                href="/#projects"
                className="rounded-full bg-black px-6 py-3 text-sm text-white transition hover:opacity-90 dark:bg-white dark:text-black"
              >
                Lihat Project
              </Link>

              <Link
                href="/#contact"
                className="rounded-full border border-black/20 px-6 py-3 text-sm backdrop-blur-md hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                Hubungi Saya
              </Link>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <CodeSnippetPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
