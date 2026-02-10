"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Phone, MapPin } from "lucide-react";

export function ContactHero() {
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

  return (
    <section className="relative overflow-hidden bg-(--color-primary)">
      <Container>
        <div className="min-h-[320px] py-12 md:py-16 lg:min-h-[380px] lg:py-20">
          <div className="max-w-2xl">
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="mb-4 text-xs font-medium tracking-[0.2em] text-(--color-secondary)/60 uppercase"
            >
              Visit Us
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
              className="font-newsreader text-3xl font-bold tracking-tight text-(--color-secondary) sm:text-4xl lg:text-5xl"
            >
              Contact
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
              className="mt-5 max-w-lg text-base leading-relaxed text-(--color-secondary)/80 sm:text-lg"
            >
              Call to book an appointment or stop by during salon hours.
              Walk-ins welcome for select services.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="tel:+19194694247"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-(--color-secondary) bg-(--color-secondary) px-5 py-2.5 text-sm font-medium text-(--color-tertiary) shadow-sm transition-colors hover:bg-(--color-secondary)/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/50 focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                (919) 469-4247
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=142+Morrisville+Square+Way,+Morrisville+NC+27560"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-(--color-secondary)/70 transition-colors hover:text-(--color-secondary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-(--color-secondary)/15 to-transparent" />
    </section>
  );
}
