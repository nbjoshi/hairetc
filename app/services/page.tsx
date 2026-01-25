
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { PageHeader } from "@/components/shared/PageHeader";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Precision Haircuts",
    description:
      "Experience expert cuts tailored to your face shape, hair texture, and personal style. Our stylists combine classic techniques with modern trends to create a look that's uniquely yours.",
    imageSrc: "/Salon1.png",
    imageAlt: "Professional haircut service",
  },
  {
    title: "Color & Highlights",
    description:
      "From subtle balayage to bold transformations, our color specialists use premium products to achieve stunning, long-lasting results while maintaining your hair's health and vitality.",
    imageSrc: "/Salon1.png",
    imageAlt: "Hair coloring and highlights service",
  },
  {
    title: "Styling & Blowouts",
    description:
      "Get salon-perfect hair for any occasion. Whether you need a sleek blowout, bouncy curls, or an elegant updo, we'll create a style that turns heads and lasts all day.",
    imageSrc: "/Salon1.png",
    imageAlt: "Hair styling and blowout service",
  },
  {
    title: "Hair Treatments",
    description:
      "Restore and revitalize your hair with our deep conditioning treatments, keratin smoothing, and specialized repair services designed to bring back shine, strength, and manageability.",
    imageSrc: "/Salon1.png",
    imageAlt: "Hair treatment and conditioning service",
  },
  {
    title: "Extensions & Enhancements",
    description:
      "Add length, volume, or both with our seamless hair extension services. We use high-quality extensions and expert application techniques for natural-looking, luxurious results.",
    imageSrc: "/Salon1.png",
    imageAlt: "Hair extensions service",
  },
  {
    title: "Special Occasion Styling",
    description:
      "Make your special day unforgettable with our bridal and event styling services. We'll create the perfect look to complement your style and ensure you feel beautiful and confident.",
    imageSrc: "/Salon1.png",
    imageAlt: "Special occasion and bridal hair styling",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="OUR SERVICES"
        description="Discover our comprehensive range of premium hair services, tailored to enhance your natural beauty and bring your vision to life."
      />
      <Separator className="h-px bg-(--color-secondary)" />
      <ServiceGrid services={services} />
    </>
  );
}
