"use client";

import Link from "next/link";
import { motion } from "motion/react";

type Project = {
  title: string;
  desc: string;
  image: string;
  tech: string[];
  href?: string;
};

const spring = { type: "spring", stiffness: 140, damping: 20 };

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { y: 0 },
        hover: { y: -6 },
      }}
      transition={spring}
      className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/60"
    >
      {/* IMAGE WRAPPER */}
      <div className="relative aspect-video overflow-hidden">
        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.06 },
          }}
          transition={spring}
        />

        {/* Gradient overlay (biar teks kebaca) */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        />

        {/* Overlay content */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={spring}
          className="pointer-events-none absolute inset-0 flex flex-col justify-end p-4"
        >
          <p className="text-sm font-medium text-white">{project.title}</p>
          <p className="mt-1 text-xs text-white/80 line-clamp-2">
            {project.desc}
          </p>
        </motion.div>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="p-4">
        <h3 className="text-base font-medium">{project.title}</h3>

        {/* Tech */}
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-black/5 px-2 py-1 text-xs dark:bg-white/10"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 6 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={spring}
        >
          <Link
            href={project.href || "#"}
            className="mt-3 inline-block text-sm text-blue-500"
          >
            Lihat detail →
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
