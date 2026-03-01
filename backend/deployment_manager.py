import subprocess
import os
import logging
from typing import Tuple, Optional

logger = logging.getLogger(__name__)

class DeploymentManager:
    """
    Manages the deployment of the generated website to Vercel.
    """
    def __init__(self, token: str):
        self.token = token

    def _slugify(self, name: str) -> str:
        """Convert a name into a Vercel-safe project slug."""
        import re
        slug = name.lower().strip()
        slug = re.sub(r'[^a-z0-9]+', '-', slug)  # Replace non-alphanumeric with hyphens
        slug = slug.strip('-')  # Remove leading/trailing hyphens
        return slug or 'levitate'

    def _write_vercel_config(self, project_path: str, project_name: str) -> None:
        """Write a vercel.json with the project name to control the deployment name."""
        import json
        config = {
            "version": 2,
            "name": project_name
        }
        config_path = os.path.join(project_path, "vercel.json")
        with open(config_path, "w") as f:
            json.dump(config, f, indent=2)
        logger.info(f"Wrote vercel.json with name: {project_name}")

    def deploy(self, project_path: str, project_name: str = "levitate") -> Tuple[bool, str, Optional[str]]:
        """
        Deploys the static assets (out/ or .next/) to Vercel.
        
        Args:
            project_path: Absolute path to the generated Next.js project.
            project_name: Name for the Vercel project (default: 'levitate').
            
        Returns:
            Tuple[bool, str, str]: (Success, Logs, URL)
        """
        if not os.path.exists(project_path):
            return False, f"Project path does not exist: {project_path}", None

        # Write vercel.json with project name to override directory-based naming
        slug = self._slugify(project_name)
        self._write_vercel_config(project_path, slug)

        # Vercel Deployment Command
        # We deploy the 'project_path' directly.
        # --prod: Production deployment
        # --token: Auth token
        # --yes: Skip confirmation
        # --no-clipboard: Don't copy to clipboard (headless)
        
        cmd = [
            "vercel",
            "deploy",
            "--prod",
            "--token", self.token,
            "--yes",
            "--no-clipboard",
            project_path
        ]

        logger.info(f"Deploying {project_path} to Vercel...")
        try:
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                check=False
            )
            
            logs = f"STDOUT:\n{result.stdout}\n\nSTDERR:\n{result.stderr}"
            
            if result.returncode == 0:
                # Vercel prints the URL to stdout on success
                url = result.stdout.strip()
                logger.info(f"Deployment successful: {url}")
                return True, logs, url
            else:
                logger.error(f"Deployment failed with code {result.returncode}.")
                return False, logs, None

        except Exception as e:
            err_msg = f"Exception running Vercel deployment: {str(e)}"
            logger.error(err_msg)
            return False, err_msg, None
