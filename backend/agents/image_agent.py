from google import genai
from google.genai import types
import os
import base64
from typing import Optional

class ImageAgent:
    def __init__(self, model_name: str = "imagen-4.0-generate-001"):
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            raise ValueError("GEMINI_API_KEY not found in environment")
        
        self.client = genai.Client(api_key=api_key)
        self.model_name = model_name

    def generate_image(self, prompt: str, output_path: str) -> Optional[str]:
        """
        Generates an image based on the prompt and saves it to output_path.
        Returns the output_path on success, or None on failure.
        """
        try:
            print(f"Generating image for prompt: '{prompt}'...")
            
            response = self.client.models.generate_images(
                model=self.model_name,
                prompt=prompt,
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio="16:9",
                    safety_filter_level="BLOCK_LOW_AND_ABOVE",
                    person_generation="ALLOW_ADULT",
                )
            )

            if not response.generated_images:
                print("No images generated.")
                return None

            image_bytes = response.generated_images[0].image.image_bytes
            
            # Ensure directory exists
            os.makedirs(os.path.dirname(output_path), exist_ok=True)

            with open(output_path, "wb") as f:
                f.write(image_bytes)
            
            print(f"Image saved to {output_path}")
            return output_path

        except Exception as e:
            print(f"Failed to generate image: {e}")
            return None
