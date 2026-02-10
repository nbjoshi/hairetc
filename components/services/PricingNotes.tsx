"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ChevronDown, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const PRICING_NOTES = [
  "Prices may vary by length, density, and consultation.",
  "Color and highlight services may require additional time and product.",
  "Free color patch testing available for guests with sensitive skin.",
  "Call for a personalized recommendation.",
];

export function PricingNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-(--color-primary)">
      <Container>
        <div className="py-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "group flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all",
              "border-(--color-secondary)/10 bg-(--color-secondary)/[0.02]",
              "hover:border-(--color-secondary)/20 hover:bg-(--color-secondary)/[0.04]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-primary)",
            )}
            aria-expanded={isOpen}
            aria-controls="pricing-notes-content"
          >
            <span className="flex items-center gap-2.5 text-sm font-medium text-(--color-secondary)/80">
              <Info className="h-4 w-4" aria-hidden="true" />
              Pricing notes
            </span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.1 : 0.2,
                ease: "easeInOut",
              }}
              className="text-(--color-secondary)/60"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                id="pricing-notes-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: prefersReducedMotion ? 0.1 : 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                    opacity: {
                      duration: prefersReducedMotion ? 0.1 : 0.2,
                      delay: prefersReducedMotion ? 0 : 0.1,
                    },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: prefersReducedMotion ? 0.1 : 0.2,
                      ease: "easeInOut",
                    },
                    opacity: { duration: 0.1 },
                  },
                }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-2 px-5 pb-2">
                  {PRICING_NOTES.map((note, index) => (
                    <motion.li
                      key={index}
                      initial={{
                        opacity: 0,
                        x: prefersReducedMotion ? 0 : -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: prefersReducedMotion ? 0.1 : 0.3,
                          delay: prefersReducedMotion ? 0 : index * 0.05,
                        },
                      }}
                      className="flex items-start gap-2 text-sm text-(--color-secondary)/70"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-secondary)/30"
                        aria-hidden="true"
                      />
                      {note}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
