"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

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
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-(--color-secondary) md:hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 left-0 z-50 bg-(--color-primary) pb-6 shadow-lg md:hidden"
          >
            <Container>
              <div className="flex h-16 items-center justify-end">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-(--color-secondary)"
                  aria-label="Close menu"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <motion.div
                className="flex flex-col items-center gap-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    className="flex flex-col items-center gap-4"
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: "easeOut",
                        },
                      },
                      closed: {
                        opacity: 0,
                        y: -10,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-xl font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {index < menuItems.length - 1 && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="w-32"
                      >
                        <Separator className="bg-(--color-secondary)" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
