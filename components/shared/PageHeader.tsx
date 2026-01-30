import { cn } from "@/utils/cn";

interface PageHeaderProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <section
      className={cn("bg-(--color-primary) px-6 py-16 lg:px-16", className)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-(--color-secondary) sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-(--color-secondary) sm:text-lg lg:mt-6">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
