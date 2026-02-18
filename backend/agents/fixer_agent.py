from typing import Dict
from .base_agent import BaseAgent
from .schemas.project_files import ProjectFiles
import json

class FixerAgent(BaseAgent[ProjectFiles]):
    def get_system_prompt(self) -> str:
        return """
        # ROLE
        You are an expert full-stack debugger specializing in Next.js 14, React, and TypeScript.
        
        # TASK
        Analyze the provided BUILD LOGS and the CURRENT CODEBASE.
        Identify the error(s) preventing a successful build.
        Return the FIXED code for the affected files.
        
        # COMMON ERROR TYPES TO LOOK FOR
        1. **Missing Components**: If a file imports a component that doesn't exist, CREATE the missing component file.
        2. **Import Errors**: Fix relative paths (e.g., `../../components` vs `../components`).
        3. **Type Errors**: Fix TypeScript interface mismatches.
        4. **Client/Server Mismatches**: Add `"use client";` to components using hooks (useState, useEffect, onClick).
        5. **Missing UI Libraries**: If `lucide-react` or `framer-motion` is missing, ensure the code uses them correctly or replaces them.
        
        # CONSTRAINTS
        - You MUST return a valid JSON object matching the `ProjectFiles` schema.
        - Only return the files that need changes. You do NOT need to return unchanged files.
        - Do NOT introduce new dependencies (npm install is not re-run during fix phase).
        - Do NOT import from `@/components/ui/*` (shadcn/ui users) unless you are sure they exist.
        - Ensure `"use client";` is present for interactive components.
        - Fix import errors, type errors, and syntax errors.
        - If the error is about a missing component, CREATE IT.
        """

    def fix_code(self, build_logs: str, current_files: Dict[str, str]) -> ProjectFiles:
        """
        Analyzes build logs and current files to produce fixes.
        
        Args:
            build_logs: stdout/stderr from the failed build.
            current_files: Dictionary of "filename": "content".
            
        Returns:
            ProjectFiles: Object containing only the files that need to be updated/created.
        """
        # Truncate logs if too long (simple heuristic)
        msg_logs = build_logs[-5000:] if len(build_logs) > 5000 else build_logs
        
        # Format files for prompt
        files_str = json.dumps(current_files, indent=2)
        
        prompt = f"""
        # BUILD FAILURE LOGS
        ```
        {msg_logs}
        ```

        # CURRENT FILE CONTENT
        ```json
        {files_str}
        ```

        Please provide the fixed versions of the files that caused the error.
        
        # OUTPUT FORMAT
        Return ONLY valid JSON with this exact structure:
        {{
          "files": {{
            "path/to/file.tsx": "file content string",
            "components/Another.tsx": "another file content"
          }}
        }}
        Do NOT return a list. Return a dictionary of file paths to content.
        """
        
        return self.run(prompt, ProjectFiles)
