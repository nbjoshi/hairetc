"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Chip } from "@/components/ui/chip";
import { CleanStandardsDrawer } from "./CleanStandardsDrawer";
import { Leaf, Heart, Palette, BadgeCheck, Info, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CleanChip {
  label: string;
  icon: LucideIcon;
}

const CLEAN_CHIPS: CleanChip[] = [
  { label: "Plant-forward", icon: Leaf },
  { label: "Scalp friendly", icon: Heart },
  { label: "Color-care options", icon: Palette },
  { label: "Salon selected", icon: BadgeCheck },
];

export function ProductsHero() {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants with reduced motion support
  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const chipVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        delay: prefersReducedMotion ? 0 : 0.4 + i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const handleScrollToGrid = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const grid = document.getElementById("product-grid");
    if (grid) {
      grid.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-(--color-primary)">
      <Container>
        <div className="grid min-h-[420px] grid-cols-1 items-center gap-8 py-12 md:gap-12 md:py-16 lg:min-h-[480px] lg:grid-cols-2 lg:gap-16 lg:py-20">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Kicker */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-4 text-xs font-medium tracking-[0.2em] text-(--color-secondary)/60 uppercase"
            >
              Clean • Salon-Selected • In-Salon Only
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="font-newsreader text-3xl font-bold tracking-tight text-(--color-secondary) sm:text-4xl lg:text-5xl"
            >
              Clean Hair Care,
              <br className="hidden sm:block" /> Curated by Stylists
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-(--color-secondary)/80 sm:text-lg"
            >
              Plant-forward formulas chosen for healthy shine, scalp comfort,
              and color longevity.
            </motion.p>

            {/* Clean Standards Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {CLEAN_CHIPS.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  variants={chipVariants}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : { y: -2, transition: { duration: 0.2 } }
                  }
                >
                  <Chip
                    icon={chip.icon}
                    className="transition-colors hover:border-(--color-secondary)/25 hover:bg-(--color-secondary)/10"
                  >
                    {chip.label}
                  </Chip>
                </motion.div>
              ))}

              {/* What we mean by clean button */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={CLEAN_CHIPS.length}
                variants={chipVariants}
              >
                <CleanStandardsDrawer>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-medium text-(--color-secondary)/60 underline decoration-(--color-secondary)/30 underline-offset-2 transition-colors hover:text-(--color-secondary)/90 hover:decoration-(--color-secondary)/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2"
                  >
                    <Info className="h-3 w-3" aria-hidden="true" />
                    What we mean by clean
                  </button>
                </CleanStandardsDrawer>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.6}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#product-grid"
                onClick={handleScrollToGrid}
                className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-(--color-secondary)/70 transition-colors hover:text-(--color-secondary)"
              >
                Browse the collection
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Art Direction Panel */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-(--color-secondary)/8 bg-gradient-to-br from-(--color-secondary)/3 via-transparent to-(--color-secondary)/5 p-8 shadow-(--color-secondary)/5 shadow-lg sm:p-10 lg:p-12">
              {/* Noise/grain overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Botanical gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-900/[0.04] via-transparent to-amber-900/[0.03]" />

              {/* Abstract botanical shadow shapes */}
              <div className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 rounded-full bg-green-900/[0.06] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-amber-900/[0.04] blur-2xl" />

              {/* Content */}
              <div className="relative">
                {/* Featured tag */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-secondary)/10 bg-(--color-secondary)/5 px-3 py-1 text-xs font-medium tracking-wider text-(--color-secondary)/70 uppercase">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  Featured
                </span>

                {/* Panel heading */}
                <h2 className="font-newsreader mt-6 text-2xl leading-snug font-light text-(--color-secondary) sm:text-3xl">
                  Naturally Inspired,
                  <br />
                  Expert Approved
                </h2>

                {/* Panel description */}
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-(--color-secondary)/70">
                  Every product in our collection is hand-picked by our stylists
                  for efficacy, quality, and mindful formulation.
                </p>

                {/* Decorative botanical illustration hint */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--color-primary) bg-(--color-secondary)/10">
                      <Leaf className="h-4 w-4 text-(--color-secondary)/60" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--color-primary) bg-(--color-secondary)/10">
                      <Heart className="h-4 w-4 text-(--color-secondary)/60" />
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--color-primary) bg-(--color-secondary)/10">
                      <BadgeCheck className="h-4 w-4 text-(--color-secondary)/60" />
                    </div>
                  </div>
                  <p className="text-xs text-(--color-secondary)/50">
                    7 salon-grade brands
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Subtle bottom divider */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-(--color-secondary)/15 to-transparent" />
    </section>
  );
}
