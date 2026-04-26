"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@base-ui/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence, Transition } from "motion/react";

const navItems = [
  { href: "/#home", label: "Beranda" },
  { href: "/#projects", label: "Project" },
  { href: "/#about", label: "Tentang" },
  { href: "/#contact", label: "Kontak" },
];

// spring config (feels like iOS)
const spring: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
  mass: 0.8,
};

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Header */}
      <div className="mx-auto mt-3 flex w-[95%] max-w-6xl items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-6 py-3 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/40">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.24em] uppercase"
        >
          Portofolio
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -2 }}>
              <Link
                href={item.href}
                className="text-sm text-foreground/80 hover:text-foreground"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button onClick={() => setTheme(isDark ? "light" : "dark")}>
            {!isDark ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Link
            href="/#contact"
            className="hidden rounded-full bg-black/70 px-4 py-2 text-sm text-white md:block dark:bg-white dark:text-black"
          >
            Mari ngobrol
          </Link>

          {/* Burger */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={spring}
            className="fixed left-1/2 top-20 z-50 w-[90%] max-w-sm -translate-x-1/2"
          >
            <div className="rounded-2xl border border-white/20 bg-white/70 p-5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-zinc-900/70">
              <motion.nav
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-col gap-4"
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={spring}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm text-foreground/80 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={spring}
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 block rounded-full bg-black px-4 py-2 text-center text-sm text-white dark:bg-white dark:text-black"
                  >
                    Mari ngobrol
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
