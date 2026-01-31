"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Phone, MapPin, Sparkles, Heart, BadgeCheck } from "lucide-react";
import Link from "next/link";

const HERO_CHIPS = [
  { label: "Consultation-first", icon: Heart },
  { label: "Salon-grade", icon: BadgeCheck },
  { label: "Transparent pricing", icon: Sparkles },
];

export function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();

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
              Services • Pricing
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="font-newsreader text-3xl font-bold tracking-tight text-(--color-secondary) sm:text-4xl lg:text-5xl"
            >
              Services
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-(--color-secondary)/80 sm:text-lg"
            >
              Call to schedule. Walk-ins welcome for select services.
            </motion.p>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              {HERO_CHIPS.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.span
                    key={chip.label}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    variants={chipVariants}
                    className="inline-flex items-center gap-1.5 rounded-full border border-(--color-secondary)/15 bg-(--color-secondary)/5 px-3 py-1.5 text-xs font-medium text-(--color-secondary)/80"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {chip.label}
                  </motion.span>
                );
              })}
            </div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.6}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="tel:+19194694247"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-(--color-secondary) bg-(--color-secondary) px-5 py-2.5 text-sm font-medium text-(--color-tertiary) shadow-sm transition-colors hover:bg-(--color-secondary)/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/50 focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call to book
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-(--color-secondary)/70 transition-colors hover:text-(--color-secondary)"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Hours & location
              </Link>
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
                  Expert Stylists
                </span>

                {/* Panel heading */}
                <h2 className="font-newsreader mt-6 text-2xl leading-snug font-light text-(--color-secondary) sm:text-3xl">
                  Personalized Care,
                  <br />
                  Every Visit
                </h2>

                {/* Panel description */}
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-(--color-secondary)/70">
                  From precision cuts to custom color, our stylists bring years
                  of experience and a commitment to healthy, beautiful hair.
                </p>

                {/* Decorative stats */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="font-newsreader text-2xl font-light text-(--color-secondary)">
                      25+
                    </p>
                    <p className="mt-1 text-xs text-(--color-secondary)/50">
                      Years
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-newsreader text-2xl font-light text-(--color-secondary)">
                      5
                    </p>
                    <p className="mt-1 text-xs text-(--color-secondary)/50">
                      Stylists
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-newsreader text-2xl font-light text-(--color-secondary)">
                      7
                    </p>
                    <p className="mt-1 text-xs text-(--color-secondary)/50">
                      Days/wk
                    </p>
                  </div>
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
