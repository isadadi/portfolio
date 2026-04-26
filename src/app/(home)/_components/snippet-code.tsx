"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const snippets = [
  {
    title: "fetch.ts",
    code: `async function fetchData(endpoint) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}`,
    result: `[
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" }
]`,
  },
  {
    title: "queue.ts",
    code: `function processPayment(invoice) {
  return queue.add("payment", {
    id: invoice.id,
    amount: invoice.amount,
    retry: 3,
  });
}`,
    result: `{
  jobId: "pay_10231",
  status: "queued"
}`,
  },
];

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 20,
};

export default function CodeRotatePreview() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % snippets.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pause]);

  const current = snippets[index];

  return (
    <div
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      className="rounded-3xl border border-white/20 bg-zinc-900/90 p-5 shadow-xl backdrop-blur-xl"
    >
      {/* Header */}
      <div className="mb-3 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-white/50">{current.title}</span>
      </div>

      {/* Code */}
      <AnimatePresence mode="wait">
        <motion.pre
          key={current.code}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={spring}
          className="text-sm text-green-400"
        >
          <code>{current.code}</code>
        </motion.pre>
      </AnimatePresence>

      {/* Result */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.result}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={spring}
          className="mt-4 rounded-xl bg-black/60 p-3 text-xs text-blue-300"
        >
          {current.result}
        </motion.div>
      </AnimatePresence>

      {/* Indicator */}
      <div className="mt-3 flex gap-1">
        {snippets.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-6 rounded-full transition ${
              i === index ? "bg-white/80" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
