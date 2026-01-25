import { Hero } from "@/components/home/Hero";
import { Testimonials } from "@/components/home/Testimonials";
import { Separator } from "@radix-ui/react-separator";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Separator className="h-px bg-(--color-secondary)" />
      <Testimonials />
    </>
  );
}
