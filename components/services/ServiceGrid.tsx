import Image from "next/image";
import { Container } from "@/components/layout/Container";

export interface Service {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface ServiceGridProps {
  services: Service[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="bg-(--color-primary) py-16">
      <Container>
        <div className="space-y-0">
          {services.map((service, index) => {
            const isEvenRow = Math.floor(index / 1) % 2 === 0;
            const imageFirst = isEvenRow;

            return (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2">
                {/* Desktop: alternating layout, Mobile: always image then text */}
                <div
                  className={`relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[400px] ${
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div
                  className={`flex items-center bg-(--color-primary) px-6 py-12 sm:py-16 lg:px-12 lg:py-20 ${
                    imageFirst ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="mx-auto w-full max-w-xl">
                    <h3 className="text-2xl font-bold tracking-tight text-(--color-secondary) sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-(--color-secondary) sm:text-lg lg:mt-6">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
