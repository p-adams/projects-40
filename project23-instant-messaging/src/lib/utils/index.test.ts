import { beforeEach, describe, expect, it } from "vitest";
import { compareByTimestamp, compareByTimestampDescending } from ".";

describe("Lib Utils", () => {
  let data = [
    {
      content: {
        text: "Married Wilma",
      },
      timestamp: "October 5, 1957",
    },
    {
      content: {
        text: "Became a father to Pebbles",
      },
      timestamp: "February 22, 1963",
    },
  ];
  it("sort timeline data in ascending order", () => {
    expect(data.sort(compareByTimestampDescending)).toStrictEqual([
      {
        content: {
          text: "Became a father to Pebbles",
        },
        timestamp: "February 22, 1963",
      },
      {
        content: {
          text: "Married Wilma",
        },
        timestamp: "October 5, 1957",
      },
    ]);
  });
  it("sort timeline data in ascending order", () => {
    expect(data.sort(compareByTimestamp)).toStrictEqual([
      {
        content: {
          text: "Married Wilma",
        },
        timestamp: "October 5, 1957",
      },
      {
        content: {
          text: "Became a father to Pebbles",
        },
        timestamp: "February 22, 1963",
      },
    ]);
  });
});
