from typing import List
from .base_agent import BaseAgent
from .schemas.project_files import ProjectFiles
from .schemas.site_plan import SitePlan

class UiAgent(BaseAgent[ProjectFiles]):
    def get_system_prompt(self) -> str:
        return """
        # ROLE
        You are an elite frontend engineer and visual designer specializing in React, Next.js (App Router), and Tailwind CSS v4.
        You produce stunning, polished, production-quality websites.

        # TECH STACK (LOCKED — do NOT add or change)
        - Next.js 16 with App Router (static export via `output: 'export'`)
        - Tailwind CSS v4 (utility classes only, NO tailwind.config file exists)
        - TypeScript
        - `lucide-react` for icons  
        - Standard `<img>` tags for images (NOT `next/image`)

        # ARCHITECTURE RULES
        - A root `app/layout.tsx` already exists. It imports `./globals.css` and wraps children in `<html><body>`. Do NOT generate `app/layout.tsx`.
        - Generate `app/page.tsx` as the homepage. It MUST import and compose ALL section components.
        - Generate one `.tsx` file per section/feature inside `components/`.
        - Every component that uses hooks (useState, useEffect, useRef) or event handlers (onClick, onChange, onSubmit) MUST start with `"use client";` as the very first line.
        - Server components (no hooks/interactivity) must NOT have `"use client";`.

        # STYLING & DESIGN (CRITICAL — this is what makes the site look great)
        - Use Tailwind CSS utility classes exclusively. Build everything from scratch with HTML + Tailwind.
        - Design a cohesive color palette based on the theme. Use consistent colors across ALL components.
        - Use generous spacing: `py-16 md:py-24` for sections, `space-y-6` or `gap-8` between elements.
        - Use proper typography hierarchy: large hero headings (`text-4xl md:text-6xl font-bold`), clear subheadings (`text-2xl md:text-3xl font-semibold`), readable body text (`text-lg text-gray-600 leading-relaxed`).
        - Add visual polish: subtle gradients (`bg-gradient-to-r`), shadows (`shadow-lg`), rounded corners (`rounded-2xl`), hover effects (`hover:scale-105 transition-transform`).
        - Alternate section backgrounds (e.g., white / light-gray / white) for visual rhythm.
        - Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for consistent container widths.
        - Ensure full responsiveness: use `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns.
        - Add a Navbar/Header and Footer directly as components (imported in page.tsx), NOT in layout.

        # IMAGE USAGE
        - AI-generated images are in `public/images/`. Reference them as `/images/<filename>`.
        - If the site plan provides an image with `usage='hero_background'`, use it as a background or prominent hero image.
        - If a filename starts with `https://`, use it as-is (it's a placeholder URL).
        - For any section WITHOUT a provided image, use `https://placehold.co/800x400?text=Section+Name`.
        - Use `<img>` tags with proper `alt` text, `className="w-full h-auto object-cover rounded-xl"` styling.

        # FORBIDDEN
        - Do NOT import from `@/components/ui/*`, `shadcn`, or any component library.
        - Do NOT use `framer-motion` or any animation library (not installed).
        - Do NOT use `react-icons`. Use `lucide-react` ONLY.
        - Do NOT generate `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`, or `globals.css`.
        - Do NOT generate image files (.png, .jpg, .jpeg, .svg).
        - Do NOT use `next/image` `Image` component. Use standard `<img>` tags.
        - Do NOT add any new npm packages or dependencies.

        # MULTI-PAGE SUPPORT
        - If the site plan has MULTIPLE pages, generate a separate `app/<slug>/page.tsx` for EACH page beyond the Home page.
        - The Home page should always be `app/page.tsx`.
        - For other pages, derive the route slug from the page title (e.g., "About Us" → `app/about-us/page.tsx`, "Menu" → `app/menu/page.tsx`, "Contact" → `app/contact/page.tsx`).
        - Each page file should import its own section components and a shared Navbar and Footer.
        - Add navigation links in the Navbar component that link to ALL pages using Next.js `<Link>` from `next/link` (e.g., `<Link href="/about-us">About Us</Link>`).
        - Ensure the Navbar is consistent across all pages.

        # OUTPUT FORMAT
        Return a JSON object with a `files` key mapping relative file paths to their full code content.

        CRITICAL JSON rules:
        - Escape all backslashes as `\\`.
        - Escape all double quotes inside code strings as `\"`.
        - Do NOT use template literal backticks inside JSON string values.

        Example:
        {
          "files": {
            "components/Hero.tsx": "export default function Hero() { return <section>...</section>; }",
            "components/Navbar.tsx": "\"use client\";\nimport ...",
            "app/page.tsx": "import Hero from '@/components/Hero';\n...",
            "app/about/page.tsx": "import Navbar from '@/components/Navbar';\n..."
          }
        }
        """

    def generate_site(self, site_plan: SitePlan) -> ProjectFiles:
        plan_str = site_plan.model_dump_json(indent=2)

        # Build page summary for the prompt
        pages_summary = []
        for i, page in enumerate(site_plan.pages):
            slug = "/ (homepage)" if i == 0 else f"/{page.title.lower().replace(' ', '-')}/"
            pages_summary.append(f"  - {page.title} → route: {slug} — features: {', '.join(page.features)}")
        pages_str = "\n".join(pages_summary)

        prompt = f"""
        Generate a complete, visually stunning website for this plan:

        {plan_str}

        This website has {len(site_plan.pages)} page(s):
{pages_str}

        Requirements:
        1. Generate a separate component file in `components/` for EACH feature/section listed in the plan (Hero, Features, Pricing, Footer, Navbar, etc.).
        2. Generate `app/page.tsx` as the HOMEPAGE that imports and composes the Home page section components in a logical order (Navbar at top, Footer at bottom).
        3. For EACH additional page beyond the first, generate `app/<slug>/page.tsx` (e.g., `app/about/page.tsx`, `app/menu/page.tsx`). Each page file should import its own section components plus the shared Navbar and Footer.
        4. The Navbar MUST include navigation links (using next/link `Link`) to ALL pages.
        5. Make it look like a professional, modern website — not a wireframe. Use rich colors from the theme, proper spacing, typography, and visual hierarchy.
        6. Use the AI-generated images from the plan where their `usage` field matches a section.
        7. Every interactive component (mobile menu toggle, accordion, tabs) MUST have `"use client";` as the first line.
        """
        return self.run(prompt, ProjectFiles)
