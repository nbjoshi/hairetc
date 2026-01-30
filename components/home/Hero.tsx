"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-(--color-primary) lg:h-screen">
      {/* Marquee Strip */}
      <Marquee />

      {/* Main Hero Content */}
      <div className="flex flex-1 flex-col lg:relative">
        {/* Container for text - aligns with all other sections */}
        <Container className="flex-none lg:flex lg:h-full lg:items-center">
          <div className="py-8 text-(--color-secondary) sm:py-10 lg:w-1/2 lg:py-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Elevate Your Style, Define Your Beauty
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              className="mt-4 text-base leading-relaxed sm:mt-6 sm:text-lg lg:text-xl"
            >
              Experience the art of hair transformation at our premier salon.
              Where expertise meets elegance, and every visit leaves you feeling
              extraordinary.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center"
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-none hover:bg-transparent hover:text-inherit"
                asChild
              >
                <Link href="/services">Explore</Link>
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Mobile/Tablet image - grows to fill remaining space */}
        <div className="relative min-h-64 flex-1 sm:min-h-80 md:min-h-96 lg:hidden">
          <Image
            src="/Salon1.png"
            alt="Salon styling"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Desktop image - positioned absolutely on right */}
        <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
          <Image
            src="/Salon1.png"
            alt="Salon styling"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

const ITEMS = Array.from({ length: 8 }, () => "ICONIC HAIR, TIMELESS BEAUTY");

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="marquee-group flex shrink-0 items-center"
      aria-hidden={ariaHidden}
    >
      {ITEMS.map((text, i) => (
        <span key={i} className="flex items-center">
          <span className="px-8 text-sm font-semibold tracking-widest text-(--color-tertiary) uppercase">
            {text}
          </span>

          <Star
            className="mx-6 h-4 w-4 text-(--color-tertiary) opacity-90"
            aria-hidden="true"
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        <MarqueeGroup />
        <MarqueeGroup aria-hidden="true" />
      </div>
    </div>
  );
}
