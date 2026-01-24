import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export default function HomePage() {
  return (
    <div className="bg-[#95978a]">
      <Section>
        <Container>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to Hair Etc
            </h1>
            <p className="mt-6 text-lg leading-8">
              Your destination for professional salon services and premium hair care products.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}
