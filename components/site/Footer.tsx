import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="bg-(--color-secondary) text-(--color-tertiary)">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand and Info */}
            <div>
              <Link
                href="/"
                className="text-xl font-semibold transition-colors"
              >
                HAIR ETC
              </Link>
              <div className="mt-4 space-y-2 text-sm">
                <p>142 Morrisville Square Way</p>
                <p>Morrisville, NC 27560</p>
                <p className="mt-2">Phone: (919) 469-4247</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Hours</h3>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 10am - 7:30pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: 11am - 4pm</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-(--color-tertiary) pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Hair Etc. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
