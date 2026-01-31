"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Service {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategoryData {
  id: string;
  title: string;
  description?: string;
  services: Service[];
}

interface ServiceCategoryProps {
  category: ServiceCategoryData;
  index: number;
}

export function ServiceCategory({ category, index }: ServiceCategoryProps) {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.2 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <motion.article
      id={category.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="scroll-mt-24"
    >
      <div
        className={cn(
          "overflow-hidden rounded-2xl border",
          "border-(--color-secondary)/8 bg-(--color-secondary)/[0.02]",
          "shadow-(--color-secondary)/5 shadow-sm",
        )}
      >
        {/* Category Header */}
        <header className="border-b border-(--color-secondary)/8 px-6 py-5 sm:px-8">
          <h2 className="font-newsreader text-xl font-medium text-(--color-secondary) sm:text-2xl">
            {category.title}
          </h2>
          {category.description && (
            <p className="mt-1 text-sm text-(--color-secondary)/60">
              {category.description}
            </p>
          )}
        </header>

        {/* Services List */}
        <ul className="divide-y divide-(--color-secondary)/6">
          {category.services.map((service, serviceIndex) => (
            <li
              key={serviceIndex}
              className={cn(
                "group flex items-baseline justify-between gap-4 px-6 py-4 sm:px-8",
                "transition-colors hover:bg-(--color-secondary)/[0.03]",
              )}
            >
              <div className="min-w-0 flex-1">
                <span className="text-sm font-medium text-(--color-secondary) sm:text-base">
                  {service.name}
                </span>
                {service.description && (
                  <p className="mt-0.5 text-xs text-(--color-secondary)/50 sm:text-sm">
                    {service.description}
                  </p>
                )}
              </div>

              {/* Dotted leader */}
              <span
                className="hidden flex-1 border-b border-dotted border-(--color-secondary)/20 sm:block"
                aria-hidden="true"
              />

              <span className="shrink-0 text-sm font-semibold text-(--color-secondary) sm:text-base">
                {service.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
