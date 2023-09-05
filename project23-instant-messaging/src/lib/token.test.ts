import { describe, it, expect } from "vitest";
import { tokenManager } from "./token";

describe("#Token", () => {
  const userId = "123";
  it("should generate and return token", () => {
    const userToken = tokenManager.generateToken(userId) ?? "";
    expect(tokenManager.validateToken(userToken)).toBeTruthy();
  });

  it("invalidates token ", () => {
    const userToken = tokenManager.generateToken() ?? "";
    const oldToken = userToken;
    tokenManager.invalidateToken(oldToken);
    expect(tokenManager.validateToken(userToken)).toBe(false);
  });
});
