import os
from typing import Optional
from huggingface_hub import InferenceClient


class ImageAgent:
    """Generates images using the Hugging Face Inference API (Stable Diffusion XL)."""

    MODEL = "stabilityai/stable-diffusion-xl-base-1.0"

    def __init__(self):
        token = os.getenv("HF_TOKEN")
        if not token:
            raise ValueError("HF_TOKEN not found in environment")
        self.client = InferenceClient(provider="nscale", api_key=token)

    def generate_image(self, prompt: str, output_path: str) -> Optional[str]:
        """
        Generates an image based on the prompt using the Hugging Face InferenceClient
        and saves it to output_path.
        Returns the output_path on success, or None on failure.
        """
        try:
            print(f"Generating image via HuggingFace SDXL for prompt: '{prompt}'...")

            # Returns a PIL.Image object
            image = self.client.text_to_image(
                prompt,
                model=self.MODEL,
            )

            # Ensure directory exists
            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            # Save PIL image to disk
            image.save(output_path)

            file_size = os.path.getsize(output_path)
            print(f"Image saved to {output_path} ({file_size} bytes)")
            return output_path

        except Exception as e:
            print(f"Failed to generate image: {e}")
            return None
