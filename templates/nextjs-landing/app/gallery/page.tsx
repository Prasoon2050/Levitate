import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Bablu Coffee - Capture the Vibe",
  description: "A visual showcase of Bablu Coffee's inviting interior, beautifully crafted coffee, delectable pastries, and the overall cozy atmosphere.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-playfair text-5xl md:text-6xl font-bold text-center mb-12 text-amber-900 leading-tight">
        Capture the Vibe
      </h1>
      <GalleryGrid />
    </div>
  );
}
