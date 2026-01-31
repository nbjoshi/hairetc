"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/utils/cn";

export interface Category {
  id: string;
  label: string;
}

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isScrollingRef = useRef(false);

  // Handle scroll spy with IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // Only update if user is not programmatically scrolling
              if (entry.isIntersecting && !isScrollingRef.current) {
                setActiveCategory(category.id);
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
          },
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [categories]);

  // Handle sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, categoryId: string) => {
      e.preventDefault();
      const element = document.getElementById(categoryId);
      if (element) {
        isScrollingRef.current = true;
        setActiveCategory(categoryId);

        const navHeight = navRef.current?.offsetHeight ?? 0;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const offsetTop = elementTop - navHeight - 24;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Reset scrolling flag after animation
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 800);
      }
    },
    [],
  );

  return (
    <nav
      ref={navRef}
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        "bg-(--color-primary)",
        isSticky && "shadow-(--color-secondary)/5 shadow-sm",
      )}
      aria-label="Service categories"
    >
      <Container>
        <div className="relative py-4">
          {/* Scrollable tabs container */}
          <div className="-mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
            <ul
              className="no-scrollbar flex items-center gap-1 overflow-x-auto lg:justify-center lg:gap-2"
              role="tablist"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <li key={category.id} role="presentation">
                    <a
                      href={`#${category.id}`}
                      onClick={(e) => handleClick(e, category.id)}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={category.id}
                      className={cn(
                        "relative block rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-secondary)/30 focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-primary)",
                        isActive
                          ? "bg-(--color-secondary) text-(--color-tertiary)"
                          : "text-(--color-secondary)/70 hover:bg-(--color-secondary)/10 hover:text-(--color-secondary)",
                      )}
                    >
                      {category.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Fade edges for scroll indication */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-(--color-primary) to-transparent lg:hidden" />
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-6 bg-gradient-to-l from-(--color-primary) to-transparent lg:hidden" />
        </div>
      </Container>

      {/* Bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-(--color-secondary)/10 to-transparent" />
    </nav>
  );
}
