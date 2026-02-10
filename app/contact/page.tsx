"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactHero } from "@/components/contact/ContactHero";
import { MapPin, Phone, Clock } from "lucide-react";

const ADDRESS = {
  street: "142 Morrisville Square Way",
  city: "Morrisville, NC 27560",
};
const PHONE = "(919) 469-4247";
const HOURS = [
  { days: "Monday – Friday", time: "10am – 7pm" },
  { days: "Saturday", time: "10am – 5pm" },
  { days: "Sunday", time: "11am – 4pm" },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=142+Morrisville+Square+Way,+Morrisville+NC+27560&output=embed";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section className="bg-(--color-primary)">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Hours & Contact Info */}
            <div className="space-y-8">
              <div className="overflow-hidden rounded-2xl border border-(--color-secondary)/8 bg-(--color-secondary)/[0.02] p-6 shadow-(--color-secondary)/5 shadow-sm sm:p-8">
                <h2 className="font-newsreader flex items-center gap-2 text-xl font-medium text-(--color-secondary) sm:text-2xl">
                  <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Hours
                </h2>
                <ul className="mt-4 space-y-2" role="list">
                  {HOURS.map(({ days, time }) => (
                    <li
                      key={days}
                      className="flex justify-between gap-4 text-sm text-(--color-secondary)/80 sm:text-base"
                    >
                      <span>{days}</span>
                      <span className="shrink-0 font-medium text-(--color-secondary)">
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-(--color-secondary)/8 bg-(--color-secondary)/[0.02] p-6 shadow-(--color-secondary)/5 shadow-sm sm:p-8">
                <h2 className="font-newsreader flex items-center gap-2 text-xl font-medium text-(--color-secondary) sm:text-2xl">
                  <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Location
                </h2>
                <address className="mt-4 not-italic">
                  <p className="text-sm leading-relaxed text-(--color-secondary)/80 sm:text-base">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}
                  </p>
                  <a
                    href="tel:+19194694247"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-(--color-secondary)/80 transition-colors hover:text-(--color-secondary) focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {PHONE}
                  </a>
                </address>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=142+Morrisville+Square+Way,+Morrisville+NC+27560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-(--color-secondary)/70 underline decoration-(--color-secondary)/30 underline-offset-2 transition-colors hover:text-(--color-secondary)"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-(--color-secondary)/8 bg-(--color-secondary)/[0.02] shadow-(--color-secondary)/5 shadow-sm">
              <div className="relative aspect-[4/3] w-full min-h-[280px] sm:min-h-[320px]">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hair Etc location map - 142 Morrisville Square Way, Morrisville, NC 27560"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
