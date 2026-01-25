"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Maryellen S.",
    quote:
      "An absolutely wonderful salon experience. Thoa is an extremely kind and knowledgeable professional. She not only did a great job on my cut and color but she taught me several new, very simple techniques to take better care of my hair.",
  },
  {
    name: "Tami L.",
    quote:
      "I have been going to Hair etc. for over eight years! Lan & Thao and all of the staff treat me like a queen. They do my hair better than anyone I have ever gone to! I drive all the way from Wake Forest just for their great service!!!",
  },
  {
    name: "Alysha D.",
    quote:
      "I've been coming to Hair etc for the past 12 years now and I don't have one complaint. They treat you like family, my hair has always looked amazing. Prices are so reasonable for all I get done and in a timely manner. Everyone is so so nice and they are great about appointments:)",
  },
];

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; quote: string };
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      {/* Animated horizontal line - spans full width */}
      <motion.div
        className="h-0.5 bg-black"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />

      {/* Name and Quote on opposite sides */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.3,
        }}
        className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
      >
        {/* Person name */}
        <h3 className="text-lg font-semibold text-[--color-secondary] sm:text-xl lg:w-1/4 lg:shrink-0">
          {testimonial.name}
        </h3>

        {/* Quote */}
        <p className="text-base leading-relaxed text-[--color-secondary] sm:text-lg lg:w-2/3">
          {testimonial.quote}
        </p>
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-(--color-primary) px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-[--color-secondary] sm:text-4xl lg:text-5xl"
          >
            TESTIMONIALS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-[--color-secondary] sm:text-lg"
          >
            Our clients love their transformed looks and newfound confidence.
            Read their testimonials below to see how Thoa has made a difference
            in their lives.
          </motion.p>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
