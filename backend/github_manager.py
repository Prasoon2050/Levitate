import subprocess
import os
import logging
from typing import Tuple, Optional
import time

logger = logging.getLogger(__name__)

class GitHubManager:
    """
    Manages pushing generated website code to GitHub repository.
    """
    def __init__(self, token: str, repo_owner: str, repo_name: str):
        """
        Args:
            token: GitHub personal access token
            repo_owner: GitHub username/org (e.g., 'levitate-ai')
            repo_name: Repository name (e.g., 'generated-site-1')
        """
        self.token = token
        self.repo_owner = repo_owner
        self.repo_name = repo_name
        self.repo_url = f"https://x-access-token:{token}@github.com/{repo_owner}/{repo_name}.git"

    def _run_git_command(self, command: list, cwd: str, check: bool = True) -> Tuple[bool, str]:
        """
        Run a git command and return success status and output.
        
        Args:
            command: Command list to execute
            cwd: Working directory
            check: Whether to raise on failure
            
        Returns:
            Tuple[bool, str]: (Success, Output/Error)
        """
        try:
            result = subprocess.run(
                command,
                cwd=cwd,
                capture_output=True,
                text=True,
                check=False
            )
            
            output = result.stdout + result.stderr
            success = result.returncode == 0
            
            if not success and check:
                logger.error(f"Git command failed: {' '.join(command)}\nOutput: {output}")
                return False, output
            
            return success, output
        except Exception as e:
            logger.error(f"Error running git command: {e}")
            return False, str(e)

    def setup_git_config(self, project_path: str) -> Tuple[bool, str]:
        """
        Initialize git config for the project.
        
        Args:
            project_path: Path to project directory
            
        Returns:
            Tuple[bool, str]: (Success, Logs)
        """
        # Configure git user
        commands = [
            ["git", "config", "user.email", "levitate-bot@levitate.ai"],
            ["git", "config", "user.name", "Levitate Bot"],
        ]
        
        for cmd in commands:
            success, output = self._run_git_command(cmd, project_path, check=True)
            if not success:
                return False, f"Failed to configure git: {output}"
        
        return True, "Git config initialized"

    def push_to_github(self, project_path: str, project_name: str, branch: str = "main") -> Tuple[bool, str, Optional[str]]:
        """
        Initialize git, commit, and push to GitHub.
        
        Args:
            project_path: Path to generated project
            project_name: Name for the commit message
            branch: Target branch (default: main)
            
        Returns:
            Tuple[bool, str, str]: (Success, Logs, GitHub URL)
        """
        if not os.path.exists(project_path):
            return False, f"Project path does not exist: {project_path}", None

        all_logs = ""
        
        try:
            # Step 1: Initialize git (if not already)
            logger.info(f"Initializing git in {project_path}...")
            success, output = self._run_git_command(["git", "init"], project_path, check=False)
            all_logs += f"Git init: {output}\n"
            
            # Step 2: Set git config
            logger.info("Setting up git config...")
            success, output = self.setup_git_config(project_path)
            all_logs += f"Git config: {output}\n"
            if not success:
                return False, all_logs, None
            
            # Step 3: Add remote origin (if not already added)
            logger.info("Adding remote origin...")
            remove_remote_cmd = ["git", "remote", "remove", "origin"]
            self._run_git_command(remove_remote_cmd, project_path, check=False)  # Ignore if doesn't exist
            
            add_remote_cmd = ["git", "remote", "add", "origin", self.repo_url]
            success, output = self._run_git_command(add_remote_cmd, project_path, check=True)
            all_logs += f"Add remote: {output}\n"
            if not success:
                return False, all_logs, None
            
            # Step 4: Add all files
            logger.info("Staging files...")
            success, output = self._run_git_command(["git", "add", "."], project_path, check=True)
            all_logs += f"Git add: {output}\n"
            if not success:
                return False, all_logs, None
            
            # Step 5: Commit
            logger.info("Creating commit...")
            commit_message = f"Generate {project_name} website via Levitate AI"
            success, output = self._run_git_command(
                ["git", "commit", "-m", commit_message],
                project_path,
                check=True
            )
            all_logs += f"Git commit: {output}\n"
            if not success:
                return False, all_logs, None
            
            # Step 6: Push to GitHub
            logger.info(f"Pushing to GitHub ({branch})...")
            push_cmd = ["git", "push", "-u", "origin", branch, "--force"]
            success, output = self._run_git_command(push_cmd, project_path, check=True)
            all_logs += f"Git push: {output}\n"
            if not success:
                return False, all_logs, None
            
            # Generate GitHub URL
            github_url = f"https://github.com/{self.repo_owner}/{self.repo_name}"
            
            logger.info(f"Successfully pushed to GitHub: {github_url}")
            return True, all_logs, github_url
            
        except Exception as e:
            error_msg = f"Unexpected error during GitHub push: {str(e)}"
            logger.error(error_msg)
            all_logs += error_msg
            return False, all_logs, None
