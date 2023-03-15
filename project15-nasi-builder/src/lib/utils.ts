import type { SelectItem } from "../lib/types";
export const currency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
// CONSTANTS
export let riceOptions: Array<SelectItem> = [
  { label: "Plain Rice", value: "plain_rice", price: 0 },
  { label: "Coconut Rice", value: "coconut_rice", price: 0.5 },
  { label: "Blue Rice", value: "blue_rice", price: 0.75 },
];
export let sides: Array<SelectItem> = [
  { label: "Chili Sauce", value: "chili_sauce", price: 0.5 },
  { label: "Fried Anchovies", value: "fried_anchovies", price: 0.75 },
  { label: "Roasted Peanuts", value: "roasted_peanuts", price: 0.75 },
  { label: "Cucumber", value: "cucumber", price: 0.5 },
];
export let proteins: Array<SelectItem> = [
  { label: "Barbecued Chicken", value: "barbecued_chicken", price: 3.0 },
  { label: "Fried Chicken", value: "fried_chicken", price: 3.5 },
  { label: "Fried Catfish", value: "fried_catfish", price: 2.5 },
  { label: "Shrimp", value: "shrimp", price: 3.0 },
];
export let sauces: Array<SelectItem> = [
  { label: "Chili Sauce", value: "chili_sauce", price: 0.5 },
  { label: "Peanut Sauce", value: "peanut_sauce", price: 0.5 },
  { label: "Curry", value: "curry", price: 0.5 },
];
