import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
interface hexToHslProps{
  hex: string | undefined;
}
export function hexToHsl(hex: string): string {
  // Remove the hash from the beginning of the hex code
  hex = hex.replace(/^#/, '');

  // Parse the hex code to RGB values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Convert RGB to HSL
  const rNormalized = r / 255;
  const gNormalized = g / 255;
  const bNormalized = b / 255;

  const cMax = Math.max(rNormalized, gNormalized, bNormalized);
  const cMin = Math.min(rNormalized, gNormalized, bNormalized);
  const delta = cMax - cMin;

  let hue = 0;
  if (delta === 0) {
    hue = 0;
  } else if (cMax === rNormalized) {
    hue = ((gNormalized - bNormalized) / delta) % 6;
  } else if (cMax === gNormalized) {
    hue = (bNormalized - rNormalized) / delta + 2;
  } else {
    hue = (rNormalized - gNormalized) / delta + 4;
  }

  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;

  const lightness = (cMax + cMin) / 2;
  const saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  // Round HSL values and return as a string
  return `${Math.round(hue)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%`;
}