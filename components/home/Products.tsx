"use client";

import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wella Professionals – INVIGO (Shampoo + Conditioner)",
    description:
      "Lightweight botanical blend that restores natural shine and softness while protecting against environmental damage.",
    image: "/products/invigo.avif",
  },
  {
    id: 2,
    name: "Nioxin – Hair Fall Defense",
    description:
      "Gentle cleansing formula enriched with plant-based proteins to lift and strengthen from root to tip.",
    image: "/products/nioxin.avif",
  },
  {
    id: 3,
    name: "Paul Mitchell – Tea Tree (Special Shampoo)",
    description:
      "Intensive hydration treatment infused with organic oils and butters for deeply nourished, resilient hair.",
    image: "/products/teatree.webp",
  },
  {
    id: 4,
    name: "Leaf + Flower – Shampoo",
    description:
      "Natural sea salt mist that creates effortless, touchable waves with a matte, lived-in finish.",
    image: "/products/leafflower.webp",
  },
  {
    id: 5,
    name: "Brazilian Blowout – Acai Aftercare",
    description:
      "Multi-benefit treatment that detangles, smooths, and repairs while providing heat protection.",
    image: "/products/bb.webp",
  },
  {
    id: 6,
    name: "Moroccanoil – Moroccanoil Treatment Oil",
    description:
      "Refreshing herbal formula that balances and revitalizes the scalp for healthier hair growth.",
    image: "/products/morocoil.webp",
  },
  {
    id: 7,
    name: "Sebastian Professional – Shaper Spray",
    description:
      "Versatile medium-hold cream that defines, shapes, and adds natural luminosity without stiffness.",
    image: "/products/shaper.jpg",
  },
];

export function Products() {
  return (
    <Section className="bg-(--color-primary)">
      <Container>
        {/* Header with In-Salon CTA */}
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-newsreader mb-6 text-3xl font-light text-(--color-secondary) sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Curated Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-(--color-secondary) sm:text-lg md:text-xl"
          >
            Our curated collection is available for purchase in-salon only.
            Visit us for a personalized recommendation tailored to your
            hair&apos;s unique needs.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              {/* Product Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl bg-[#f4f1ea] shadow-sm ring-1 ring-black/5">
                {/* soft spotlight */}
                <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 blur-3xl" />

                <div className="relative aspect-[3/4] p-8 sm:p-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
              </div>

              {/* Product Info - Always Visible */}
              {/* <div className="flex-1">
                <h3 className="font-newsreader mb-3 text-2xl leading-tight font-light text-(--color-secondary) sm:text-3xl">
                  {product.name}
                </h3>
                <p className="text-base leading-relaxed text-(--color-secondary) opacity-90 sm:text-lg">
                  {product.description}
                </p>
              </div> */}
              <div className="flex-1">
                <h3 className="font-newsreader mb-3 text-2xl leading-tight font-light text-(--color-secondary) sm:text-3xl">
                  {product.name}
                </h3>
                <p className="text-base leading-relaxed text-(--color-secondary) opacity-90 sm:text-lg">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
