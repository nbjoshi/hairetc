"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Separator } from "@/components/ui/separator";
import { Chip } from "@/components/ui/chip";
import { motion, useReducedMotion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  chips: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wella Professionals – INVIGO",
    description:
      "Lightweight botanical blend that restores natural shine and softness while protecting against environmental damage.",
    image: "/products/invigo.webp",
    chips: ["Plant-forward", "Salon selected"],
  },
  {
    id: 2,
    name: "Nioxin – Hair Fall Defense",
    description:
      "Gentle cleansing formula enriched with plant-based proteins to lift and strengthen from root to tip.",
    image: "/products/nioxin.png",
    chips: ["Scalp-friendly", "In-salon only"],
  },
  {
    id: 3,
    name: "Paul Mitchell – Tea Tree",
    description:
      "Intensive hydration treatment infused with essential oils and butters for deeply nourished, resilient hair.",
    image: "/products/teatree.png",
    chips: ["Plant-forward", "Gentle formula"],
  },
  {
    id: 4,
    name: "Leaf + Flower – Shampoo",
    description:
      "Natural botanical mist that creates effortless, touchable waves with a matte, lived-in finish.",
    image: "/products/leafflower.webp",
    chips: ["Ingredient-conscious", "Salon selected"],
  },
  {
    id: 5,
    name: "Brazilian Blowout – Acai Aftercare",
    description:
      "Multi-benefit treatment that detangles, smooths, and repairs while providing heat protection.",
    image: "/products/brazil.webp",
    chips: ["Plant-forward", "In-salon only"],
  },
  {
    id: 6,
    name: "Moroccanoil – Treatment Oil",
    description:
      "Refreshing herbal formula that balances and revitalizes the scalp for healthier hair growth.",
    image: "/products/morocco.png",
    chips: ["Salon selected", "Gentle formula"],
  },
  {
    id: 7,
    name: "Sebastian Professional – Shaper",
    description:
      "Versatile medium-hold cream that defines, shapes, and adds natural luminosity without stiffness.",
    image: "/products/ss.png",
    chips: ["In-salon only", "Salon selected"],
  },
];

export function ProductGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section className="bg-(--color-primary)">
      <Container>
        {/* Product Grid */}
        <div
          id="product-grid"
          className="grid scroll-mt-20 grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12"
        >
          {PRODUCTS.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white/[0.04] shadow-sm transition-all duration-300 ease-out focus-within:ring-2 focus-within:ring-(--color-secondary)/20 focus-within:ring-offset-2 focus-within:ring-offset-(--color-primary) hover:shadow-lg motion-safe:hover:-translate-y-1"
            >
              {/* Image Stage */}
              <div className="relative flex h-[260px] items-end justify-center overflow-hidden rounded-t-xl bg-white/70 sm:h-[280px]">
                {/* CSS Botanical Overlay - Consistent for all cards */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07] blur-[0.5px] transition-opacity duration-300 group-hover:opacity-[0.11]"
                  style={{
                    backgroundImage: `
                      radial-gradient(ellipse 80% 50% at 20% 30%, rgba(34, 85, 51, 0.4) 0%, transparent 50%),
                      radial-gradient(ellipse 60% 40% at 80% 70%, rgba(34, 85, 51, 0.3) 0%, transparent 50%),
                      radial-gradient(ellipse 40% 60% at 60% 20%, rgba(45, 90, 39, 0.25) 0%, transparent 45%),
                      radial-gradient(ellipse 50% 30% at 30% 80%, rgba(60, 100, 50, 0.2) 0%, transparent 40%)
                    `,
                  }}
                  aria-hidden="true"
                />

                {/* Subtle vignette gradient */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/[0.06]"
                  aria-hidden="true"
                />

                {/* Pedestal Shadow - Grounding oval beneath product */}
                <div
                  className="pointer-events-none absolute bottom-5 h-3 w-32 rounded-full bg-black/[0.15] blur-xl transition-all duration-300 group-hover:bg-black/[0.22] group-hover:blur-2xl sm:w-36"
                  aria-hidden="true"
                />

                {/* Product Image Container */}
                <div
                  className="relative z-10 mb-2 h-[200px] w-full max-w-[180px] transition-transform duration-300 ease-out motion-safe:group-hover:scale-[1.02] sm:h-[220px] sm:max-w-[200px]"
                  style={{
                    filter: "drop-shadow(0 16px 20px rgba(0, 0, 0, 0.2))",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 3}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                {/* Product Title */}
                <h3 className="font-newsreader text-xl leading-snug font-medium tracking-tight text-(--color-secondary) sm:text-[1.375rem]">
                  {product.name}
                </h3>

                {/* Chips Row */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.chips.map((chip) => (
                    <Chip key={chip} variant="subtle" size="sm">
                      {chip}
                    </Chip>
                  ))}
                </div>

                {/* Description - Clamped to 2 lines */}
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-(--color-secondary)/75 sm:mt-4 sm:text-[0.9375rem]">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom In-Salon Notice */}
        <div className="mt-16 md:mt-20">
          <Separator className="h-px bg-(--color-secondary)/20" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="py-6 text-center"
          >
            <p className="text-sm font-light text-(--color-secondary)/80 sm:text-base md:text-lg">
              Visit us in-salon to explore our full range and receive expert
              guidance on the perfect products for your hair.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
