"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ProjectCard } from "./project-card";

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

const projects = [
  {
    title: "TASHA",
    desc: "Sistem manajemen transaksi dengan VA",
    image: "/images/tasha.png",
    tech: ["Next.js", "PostgreSQL"],
  },
  {
    title: "Etnomedicine",
    desc: "Pencarian tanaman obat berbasis data",
    image: "/images/etno.png",
    tech: ["React", "ML"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto w-[90%] max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Project</h2>
          <p className="mt-2 text-foreground/60">
            Beberapa project yang pernah saya kerjakan
          </p>
        </motion.div>
        {/* GRID PROJECTS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        ;
      </div>
    </section>
  );
}
