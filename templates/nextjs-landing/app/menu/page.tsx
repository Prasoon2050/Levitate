import MenuSection from "@/components/menu/MenuSection";
import AllergenDisclaimer from "@/components/menu/AllergenDisclaimer";

export const metadata = {
  title: "Bablu Coffee - Our Delicious Menu",
  description: "Explore the comprehensive menu of Bablu Coffee, featuring coffee, tea, beverages, pastries, and light bites.",
};

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-12 text-amber-900 leading-tight">
        Our Delicious Menu
      </h1>
      <MenuSection />
      <AllergenDisclaimer />
    </div>
  );
}
