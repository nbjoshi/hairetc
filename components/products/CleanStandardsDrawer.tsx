"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Leaf, Sparkles, Heart, X } from "lucide-react";

interface CleanStandardsDrawerProps {
  children: React.ReactNode;
}

export function CleanStandardsDrawer({ children }: CleanStandardsDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="bg-(--color-primary)">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader className="relative">
            <DrawerClose className="absolute top-2 right-2 rounded-full p-2 transition-colors hover:bg-black/5">
              <X className="h-4 w-4 text-(--color-secondary)" />
              <span className="sr-only">Close</span>
            </DrawerClose>
            <DrawerTitle className="font-newsreader text-2xl font-light text-(--color-secondary)">
              Our Clean Standards
            </DrawerTitle>
            <DrawerDescription className="text-(--color-secondary)/70">
              What &ldquo;clean hair care&rdquo; means at Hair Etc.
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-5 px-4 pb-8">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-secondary)/10">
                <Leaf className="h-4 w-4 text-(--color-secondary)" />
              </div>
              <div>
                <h4 className="font-medium text-(--color-secondary)">
                  Ingredient-Conscious Formulas
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-(--color-secondary)/70">
                  We prioritize salon-grade products formulated with
                  thoughtfully selected ingredients that work in harmony with
                  your hair.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-secondary)/10">
                <Heart className="h-4 w-4 text-(--color-secondary)" />
              </div>
              <div>
                <h4 className="font-medium text-(--color-secondary)">
                  Gentle Options Available
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-(--color-secondary)/70">
                  We carry gentle formulas suitable for many scalp types and
                  hair needs, including options for sensitive scalps.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--color-secondary)/10">
                <Sparkles className="h-4 w-4 text-(--color-secondary)" />
              </div>
              <div>
                <h4 className="font-medium text-(--color-secondary)">
                  Stylist-Guided Selection
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-(--color-secondary)/70">
                  Ask your stylist for the best match for your hair goals and
                  any sensitivities — personalized recommendations are part of
                  our service.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-(--color-secondary)/10 bg-(--color-secondary)/5 p-3">
              <p className="text-center text-xs text-(--color-secondary)/60">
                Product availability and formulations vary by brand and product
                line. Your stylist can help identify the right fit for you.
              </p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
