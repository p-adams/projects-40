import { describe, it, expect } from "vitest";
import { tokenManager } from "./token";

describe("#Token", () => {
  const userId = "123"; // Replace with the actual user identifier
  it("should generate and return token", () => {
    const $tm = tokenManager;
    const userToken = $tm.generateUserToken(userId);
    expect(userToken).not.toBe("");
    expect($tm.validateToken(userToken)).toBeTruthy();
  });
});
