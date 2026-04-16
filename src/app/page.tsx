"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/card/card";
import { Switch } from "@/components/switch/switch";
import {
  Dribbble,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Sun,
  User,
} from "lucide-react";
import { ScatteredCodeBackground } from "@/components/scattered-code-background";
import { socialLinks } from "@/Data/ProjectData";
import { useLocaleContext } from "@/context/locale-context";
import { localeLabels, locales, type Locale } from "@/i18n/messages";
import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "dlink-dark";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 28 },
  },
};

export default function Dlink() {
  const { locale, setLocale, t } = useLocaleContext();
  const [darkMode, setDarkMode] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "1") setDarkMode(true);
    if (stored === "0") setDarkMode(false);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, darkMode ? "1" : "0");
  }, [darkMode]);

  const LinkIcon = ({ link }: { link: string }) => {
    if (link === "Portfolio")
      return (
        <Globe className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
      );
    if (link.includes("Dribbble"))
      return (
        <Dribbble className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
      );
    if (link.includes("Linkedin"))
      return (
        <Linkedin className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
      );
    if (link.includes("Github"))
      return (
        <Github className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
      );
    if (link.includes("Instagram"))
      return (
        <Instagram className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
      );
    return (
      <User className="h-5 w-5 shrink-0 text-neutral-950 dark:text-white" aria-hidden />
    );
  };

  const hoverLift = reduceMotion
    ? undefined
    : {
        y: -2,
        transition: { type: "spring" as const, stiffness: 450, damping: 28 },
      };

  const hoverScale = reduceMotion
    ? undefined
    : {
        scale: 1.04,
        transition: { type: "spring" as const, stiffness: 400, damping: 22 },
      };

  const tapScale = reduceMotion ? undefined : { scale: 0.97 };

  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden text-neutral-950 transition-colors duration-500 dark:text-white",
        "bg-gradient-to-br from-neutral-100 via-white to-neutral-200",
        "dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
      )}
    >
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-neutral-300/40 blur-3xl dark:bg-neutral-600/25" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-500/20" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-white/60 blur-3xl dark:bg-neutral-700/25" />
      </div>

      <ScatteredCodeBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col items-center px-5 pb-10 pt-6">
        <motion.div
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <motion.div
            className="glass-panel flex w-full items-center justify-center gap-1 rounded-full p-1 sm:w-auto"
            role="group"
            aria-label={t.languageLabel}
            whileHover={hoverLift}
          >
            {locales.map((loc: Locale) => (
              <motion.button
                key={loc}
                type="button"
                onClick={() => setLocale(loc)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors",
                  locale === loc
                    ? "bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-black"
                    : "text-neutral-950 hover:bg-white/50 dark:text-white dark:hover:bg-white/15"
                )}
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                whileTap={tapScale}
              >
                {localeLabels[loc]}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="glass-panel flex items-center justify-center gap-2 rounded-full px-3 py-2 sm:justify-end"
            whileHover={hoverLift}
          >
            <motion.span
              whileHover={reduceMotion ? undefined : { rotate: 12, scale: 1.1 }}
            >
              <Sun className="h-4 w-4 text-neutral-950 dark:text-white" aria-hidden />
            </motion.span>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              aria-label={darkMode ? t.themeDark : t.themeLight}
            />
            <motion.span
              whileHover={reduceMotion ? undefined : { rotate: -12, scale: 1.1 }}
            >
              <Moon className="h-4 w-4 text-neutral-950 dark:text-white" aria-hidden />
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          className="glass-panel mt-8 w-full rounded-3xl px-6 py-8 text-center"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          custom={1}
          variants={fadeUp}
          whileHover={reduceMotion ? undefined : { scale: 1.01 }}
          transition={{ type: "spring" as const, stiffness: 260, damping: 22 }}
        >
          <motion.div
            className="mx-auto w-full max-w-[13.5rem] sm:max-w-[15rem]"
            whileHover={hoverScale}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            <Image
              width={240}
              height={240}
              src="/Profile.jpeg"
              alt=""
              className="aspect-square h-auto w-full rounded-2xl border-2 border-white/70 object-cover shadow-lg ring-2 ring-black/5 dark:border-white/30 dark:ring-white/10"
            />
          </motion.div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight text-neutral-950 dark:text-white">
            @Dimitar
          </h1>
          <p className="mt-2 text-sm font-medium text-neutral-950/80 dark:text-white/80">
            {t.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-950/70 dark:text-white/70">
            {t.socialBlurb}
          </p>
          <motion.a
            href="mailto:dimihbt@yahoo.com"
            aria-label={t.emailAria}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-white/40 dark:text-white dark:hover:bg-white/10"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    scale: 1.03,
                    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
                  }
            }
            whileTap={tapScale}
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            dimihbt@yahoo.com
          </motion.a>
        </motion.div>

        <motion.h2
          className="mt-10 w-full max-w-md text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-950/50 dark:text-white/50"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          {t.socialHeading}
        </motion.h2>

        <motion.div
          className="mt-4 w-full max-w-md space-y-3"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={staggerContainer}
        >
          {socialLinks.map((link, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="hover:border-white/60 dark:hover:border-white/35">
                <CardContent className="flex items-center gap-3 p-4">
                  <motion.span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/50 dark:bg-white/10"
                    whileHover={
                      reduceMotion ? undefined : { scale: 1.08, rotate: -3 }
                    }
                  >
                    <LinkIcon link={link.title} />
                  </motion.span>
                  {link.url ? (
                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-neutral-950 underline-offset-4 hover:underline dark:text-white"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 4,
                              transition: {
                                type: "spring" as const,
                                stiffness: 400,
                                damping: 24,
                              },
                            }
                      }
                    >
                      {link.title}
                    </motion.a>
                  ) : (
                    <span className="text-base font-semibold text-neutral-950/60 dark:text-white/60">
                      {link.title}
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mt-12 text-center text-sm text-neutral-950/55 dark:text-white/55"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.45 }}
        >
          {t.footer}
        </motion.p>
      </div>
    </div>
  );
}
