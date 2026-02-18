from typing import List
from .base_agent import BaseAgent
from .schemas.project_files import ProjectFiles
from .schemas.site_plan import SitePlan

class UiAgent(BaseAgent[ProjectFiles]):
    def get_system_prompt(self) -> str:
        return """
        # ROLE
        You are a senior frontend engineer specializing in React, Next.js, and Tailwind CSS.
        
        # ALLOWED ACTIONS
        - Implement React components using TypeScript.
        - Use standard Tailwind CSS utility classes.
        - Use 'lucide-react' for icons.
        - MUST start the file with `"use client";` (include the double quotes!) if using hooks (useState, useEffect) or interactivity.
        
        # FORBIDDEN ACTIONS
        - Do NOT import from '@/components/ui/*' or any other custom component library. 
        - DO NOT import { Button } or { Card }. BUILD THEM FROM SCRATCH using HTML tags (button, div) and Tailwind classes.
        - Do NOT change dependencies (no new npm packages).
        - Do NOT use 'react-icons'. Use 'lucide-react' ONLY.
        
        # EXAMPLES
        INCORRECT: `import { Button } from '@/components/ui/button';`
        CORRECT: `<button className="px-4 py-2 bg-blue-600 rounded text-white">Click me</button>`
        
        INCORRECT: `use client";` (Missing leading quote)
        CORRECT: `"use client";`
        - Do NOT change configurations (e.g., tailwind.config.ts, next.config.ts).
        ROLE:
        You are a senior React/Next.js developer. Your task is to generate a complete, production-ready website based on a provided Site Plan.

        INPUT:
        1. Site Plan (JSON): Contains pages, features, theme, and available images.
        2. Component Name (optional): If specified, generate only that component.

        GUIDELINES:
        - Use Next.js 14+ (App Router).
        - Use Tailwind CSS for styling.
        - Use 'lucide-react' for icons.
        - Use 'framer-motion' for animations.
        - Ensure all components are fully responsive (mobile-first).
        - Use the specific images provided in the 'images' list of the Site Plan where appropriate (e.g. for Hero backgrounds, feature sections).
        - If an image is provided for a section (e.g., usage='hero_background'), use its 'filename' prop: '/images/<filename>' (or the full URL if it's a placeholder).
        - If no image is provided, use high-quality placeholders (e.g., https://placehold.co/600x400).
        - DO NOT return the content of image files (e.g., .png, .jpg) in the JSON response. Assume they are already in the public folder.

        OUTPUT FORMAT:
        Return a JSON object with a 'files' key containing a map of filenames to their code content.
        
        CRITICAL: Ensure the JSON is valid.
        - Escape all backslashes (`\`) as `\\`.
        - Escape all double quotes (`"`) inside the code string as `\"`.
        - Do NOT use single backslashes in the JSON string value.
        - Example: "content": "console.log(\"Hello world\");" relative to the JSON structure.

        Example:
        {
          "files": {
            "components/Navbar.tsx": "export default function Navbar() { ... }",
            "app/page.tsx": "export default function Home() { ... }"
          }
        }
        """

    def generate_site(self, site_plan: SitePlan) -> ProjectFiles:
        # Convert the complex SitePlan object to a string representation for the prompt
        plan_str = site_plan.model_dump_json(indent=2)
        
        prompt = f"""
        Generate the full website codebase for this plan:
        
        {plan_str}
        
        Generate:
        - A component for EACH feature in the plan.
        - The main `app/page.tsx` that composes them.
        """
        return self.run(prompt, ProjectFiles)
