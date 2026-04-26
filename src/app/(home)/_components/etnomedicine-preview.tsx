"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Item = {
  name: string;
  desc: string;
  tags?: string[];
};

const DATA: Item[] = [
  {
    name: "Kunyit",
    desc: "Anti-inflamasi, meningkatkan daya tahan tubuh",
    tags: ["anti inflamasi", "imunitas"],
  },
  {
    name: "Jahe",
    desc: "Menghangatkan tubuh, meredakan mual",
    tags: ["hangat", "pencernaan"],
  },
  {
    name: "Temulawak",
    desc: "Meningkatkan nafsu makan & fungsi hati",
    tags: ["hati", "nafsu makan"],
  },
  {
    name: "Daun Sirih",
    desc: "Antiseptik alami, membantu penyembuhan luka",
    tags: ["antiseptik"],
  },
  {
    name: "Sambiloto",
    desc: "Membantu menurunkan demam & infeksi",
    tags: ["demam", "infeksi"],
  },
];

const spring = { type: "spring", stiffness: 260, damping: 24, mass: 0.9 };

function highlight(text: string, q: string) {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="rounded bg-yellow-300/60 px-0.5 text-black">
        {text.slice(i, i + q.length)}
      </span>
      {text.slice(i + q.length)}
    </>
  );
}

export default function EtnomedicinePreview() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Item[]>([]);

  const filtered = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();
    return DATA.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.desc.toLowerCase().includes(q) ||
        d.tags?.some((t) => t.includes(q)),
    ).slice(0, 4);
  }, [query]);

  // fake API with delay
  const handleSearch = (value: string) => {
    setQuery(value);
    setLoading(true);
    setResults([]);
    setTimeout(
      () => {
        setResults(filtered);
        setLoading(false);
      },
      450 + Math.random() * 250,
    ); // 450–700ms
  };

  return (
    <div className="rounded-3xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70">
      {/* Input */}
      <div className="relative">
        <input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Cari tanaman obat... (contoh: kunyit)"
          className="w-full rounded-xl border border-black/10 bg-white/60 px-4 py-2 text-sm outline-none backdrop-blur-md placeholder:text-foreground/40 focus:ring-2 focus:ring-blue-500/40 dark:border-white/10 dark:bg-white/10"
        />
        {/* caret / typing feel */}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40"
        >
          |
        </motion.span>
      </div>

      {/* Results */}
      <div className="mt-4 min-h-[120px]">
        <AnimatePresence mode="popLayout">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-foreground/60"
            >
              <motion.div
                className="h-2 w-2 rounded-full bg-blue-500"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
              Mencari data...
            </motion.div>
          )}

          {!loading && query && results.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-foreground/60"
            >
              Tidak ditemukan hasil untuk “{query}”
            </motion.p>
          )}

          {!loading && results.length > 0 && (
            <motion.div
              key="list"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="space-y-3"
            >
              {results.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: 10, scale: 0.98 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={spring}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-white/20 bg-white/60 p-3 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-sm font-medium">
                    {highlight(item.name, query)}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {highlight(item.desc, query)}
                  </p>

                  {item.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px]"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-4 text-xs text-foreground/50">
        Sistem pencarian & rekomendasi berbasis data etnomedicine (simulasi)
      </p>
    </div>
  );
}
