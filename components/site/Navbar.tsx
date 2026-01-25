"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Separator } from "@/components/ui/separator";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative bg-(--color-primary)">
      <div>
        <div className="flex h-16 items-center justify-between px-6 md:px-12 lg:px-16">
          {/* Brand */}
          <Link href="/" className="text-xl font-semibold">
            HAIR ETC
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/products" className="text-xl font-medium">
              Products
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/services" className="text-xl font-medium">
              Services
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link href="/contact" className="text-xl font-medium">
              Contact
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-(--color-secondary) md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 bg-(--color-primary) pb-6 shadow-lg md:hidden">
          <Container>
            <div className="flex h-16 items-center justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-(--color-secondary)"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link
                href="/products"
                className="text-xl font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Separator className="w-16 bg-(--color-secondary)" />
              <Link
                href="/services"
                className="text-xl font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Separator className="w-16 bg-(--color-secondary)" />
              <Link
                href="/contact"
                className="text-xl font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
