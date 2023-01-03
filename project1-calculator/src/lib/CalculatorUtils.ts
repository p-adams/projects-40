export type Key = { label: string; value: string | number };
export const keys: Array<Key> = [
  null,
  null,
  null,
  { label: "C", value: "C" },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "÷", value: "/" },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "×", value: "*" },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "+", value: "+" },
  { label: "0", value: 0 },
  { label: ".", value: "." },
  { label: "=", value: "=" },
  { label: "-", value: "-" },
];

export const operations = {
  "+": (l: number, r: number) => add(l, r),
  "-": (l: number, r: number) => subtract(l, r),
  "*": (l: number, r: number) => multiply(l, r),
  "/": (l: number, r: number) => divide(l, r),
};

function add(loperand: number, roperand: number) {
  console.log("foo: ", loperand, roperand);
  return loperand + roperand;
}

function subtract(loperand: number, roperand: number) {
  return loperand - roperand;
}

function multiply(loperand: number, roperand: number) {
  return loperand * roperand;
}

function divide(loperand: number, roperand: number) {
  return loperand / roperand;
}
