import ContactInfo from "@/components/contact/ContactInfo";
import StaticMap from "@/components/contact/StaticMap";
import SocialLinks from "@/components/contact/SocialLinks";

export const metadata = {
  title: "Bablu Coffee - Get in Touch & Visit Us",
  description: "Find all necessary contact information, location details, and opening hours for Bablu Coffee.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-12 text-amber-900 leading-tight">
        Get in Touch & Visit Us
      </h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <ContactInfo />
          <SocialLinks />
        </div>
        <StaticMap />
      </div>
    </div>
  );
}
