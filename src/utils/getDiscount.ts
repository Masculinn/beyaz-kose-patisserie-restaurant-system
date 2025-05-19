import { DiscountFunc } from "@/interfaces";

export const getDiscount: DiscountFunc = (price, discount) =>
  Math.round(price + (price * discount) / 100);
