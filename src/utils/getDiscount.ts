import { DiscountFunc } from "@/interfaces";

export const getDiscount: DiscountFunc = (price, discount) => {
  return Math.round(price - (price * discount) / 100);
};
