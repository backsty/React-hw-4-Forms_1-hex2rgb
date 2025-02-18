import { RGB } from '../types';

export const isValidHex = (hex: string): boolean => {
  const regex = /^#[0-9A-Fa-f]{6}$/;
  return regex.test(hex);
};

export const hex2rgb = (hex: string): RGB | null => {
  if (!isValidHex(hex)) return null;

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};
