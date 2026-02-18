import subprocess
import os
import logging
from typing import Tuple

logger = logging.getLogger(__name__)

class BuildManager:
    """
    Manages the execution of the website build process within a sandboxed Docker environment.
    """
    def __init__(self, sandbox_dir: str):
        self.sandbox_dir = sandbox_dir
        self.image_tag = "levitate-build-agent:latest"

    def build_image(self) -> bool:
        """
        Builds the Docker image for the build agent.
        """
        dockerfile_path = os.path.join(self.sandbox_dir, "Dockerfile")
        if not os.path.exists(dockerfile_path):
            logger.error(f"Dockerfile not found at {dockerfile_path}")
            return False

        cmd = ["docker", "build", "-t", self.image_tag, self.sandbox_dir]
        
        try:
            logger.info("Building Docker image...")
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            logger.info("Docker image built successfully.")
            return True
        except subprocess.CalledProcessError as e:
            logger.error(f"Failed to build Docker image: {e.stderr}")
            return False
        except FileNotFoundError:
             logger.error("Docker command not found. Is Docker installed and in PATH?")
             return False


    def run_build(self, project_path: str) -> Tuple[bool, str]:
        """
        Runs the build in a container.
        
        Args:
            project_path: Absolute path to the generated Next.js project.
            
        Returns:
            Tuple[bool, str]: (Success, Logs)
        """
        if not os.path.exists(project_path):
            return False, f"Project path does not exist: {project_path}"

        # Ensure image exists (or try to build it)
        # In a real prod env, we might skip this or cache it.
        if not self.build_image():
             return False, "Failed to build Docker builder image."

        # Construct Docker Run Command
        # Constraints:
        # - User: node (enforced by Dockerfile, but good to be explicit if needed)
        # - CPUs: 1.0
        # - Memory: 512m
        # - Network: Allow for now (npm install), but strict sandbox would imply 'none' + vendoring.
        # - Volume: Mount project_path to /app
        
        # Use a single shell command string to ensure proper chaining
        # npm install && npm run build
        # We catch potential errors by combining stdout/stderr
        build_command = "npm install && npm run build"
        
        cmd = [
            "docker", "run",
            "--rm",
            "--cpus=1.0",
            "--memory=2048m",
            "-v", f"{os.path.abspath(project_path)}:/app",
            "-w", "/app",
            self.image_tag,
            "/bin/sh", "-c", build_command
        ]

        logger.info(f"Starting sandboxed build for {project_path} with command: {build_command}")
        
        try:
            # Run without capture_output=True first to stream? No, we need logs for the fixer.
            result = subprocess.run(
                cmd,
                capture_output=True,
                text=True,
                check=False 
            )
            
            # Combine formatting
            logs = f"COMMAND: {' '.join(cmd)}\n\nEXIT CODE: {result.returncode}\n\nSTDOUT:\n{result.stdout}\n\nSTDERR:\n{result.stderr}"
            
            if result.returncode == 0:
                logger.info("Build successful.")
                return True, logs
            else:
                logger.error(f"Build failed with code {result.returncode}.")
                return False, logs

        except Exception as e:
            err_msg = f"Exception running Docker container: {str(e)}"
            logger.error(err_msg)
            return False, err_msg
