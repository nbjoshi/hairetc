"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import {
  ServicesHero,
  PricingNotes,
  CategoryNav,
  ServiceCategory,
} from "@/components/services";
import type { Category, ServiceCategoryData } from "@/components/services";
import { ArrowUp } from "lucide-react";

const CATEGORIES: Category[] = [
  { id: "cut-finish", label: "Cut & Finish" },
  { id: "texture", label: "Texture" },
  { id: "highlights", label: "Highlights" },
  { id: "color", label: "Color" },
  { id: "waxing", label: "Waxing" },
];

const SERVICE_DATA: ServiceCategoryData[] = [
  {
    id: "cut-finish",
    title: "Cut & Finish",
    description: "Precision cuts and styling for every look",
    services: [
      { name: "Women's Cut", price: "$35–$45" },
      { name: "Men's Cut", price: "$20" },
      { name: "Kids' Cut", price: "$20" },
      { name: "Women's Cut + Condition & Style", price: "$55" },
      { name: "Evening Style (Updo)", price: "$95" },
    ],
  },
  {
    id: "texture",
    title: "Texture",
    description: "Transform your hair's natural pattern",
    services: [
      { name: "Perm", price: "$95" },
      { name: "Vital Shot", price: "$95" },
      { name: "Keratin Complex", price: "$150" },
      { name: "Natural Treatment", price: "$200" },
    ],
  },
  {
    id: "highlights",
    title: "Highlights",
    description: "Dimensional color and sun-kissed effects",
    services: [
      { name: "Classic Foil", price: "$140" },
      { name: "Specialty Foil (Two Color)", price: "$160" },
      {
        name: "Highlight + Color Glaze + Cut & Style",
        price: "From $150",
      },
    ],
  },
  {
    id: "color",
    title: "Color",
    description: "Rich, lasting color tailored to you",
    services: [
      { name: "Color + Cut & Style", price: "$85" },
      { name: "Prescriptive Design (Two Color)", price: "$100" },
      { name: "Color Glaze", price: "$44–$55" },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    description: "Quick, gentle hair removal",
    services: [
      { name: "Brow", price: "$10" },
      { name: "Lip", price: "$10" },
      { name: "Chin", price: "$10" },
      { name: "Brow Tint", price: "$25" },
    ],
  },
];

function BackToTop() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex items-center gap-2 text-sm font-medium text-(--color-secondary)/60 transition-colors hover:text-(--color-secondary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2"
      aria-label="Back to top"
    >
      <ArrowUp
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      Back to top
    </button>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero />

      {/* Pricing Notes Accordion */}
      <PricingNotes />

      {/* Sticky Category Navigation */}
      <CategoryNav categories={CATEGORIES} />

      {/* Service Categories */}
      <Section className="bg-(--color-primary)">
        <Container>
          {/* Grid layout: 2 columns on lg, 1 on mobile */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {SERVICE_DATA.map((category, index) => (
              <ServiceCategory
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>

          {/* Back to top */}
          <div className="mt-12 flex justify-center lg:mt-16">
            <BackToTop />
          </div>
        </Container>
      </Section>
    </>
  );
}
