import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export function Footer() {
  return (
    <footer className="bg-[#222222] text-[#e0e0e0]">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand and Info */}
            <div>
              <Link href="/" className="text-xl font-semibold hover:text-white transition-colors">
                Hair Etc
              </Link>
              <div className="mt-4 space-y-2 text-sm">
                <p>123 Main Street</p>
                <p>City, State 12345</p>
                <p className="mt-2">Phone: (555) 123-4567</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <div className="space-y-2 text-sm">
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 9am - 5pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Hair Etc. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
