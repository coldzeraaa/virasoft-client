import { HOST_CONFIG } from "@/configs/HOST_CONFIG";

export function imageUrlHelper(image?: unknown, size?: number): string {
  if (!image || typeof image !== "string")
    return `https://placehold.co/${size || "600"}?text=Зураг`;
  if (image.startsWith("/")) return `${HOST_CONFIG.host}${image}`;
  return image;
}
