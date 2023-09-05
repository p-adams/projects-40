import { describe, it, expect } from "vitest";
import { tokenManager } from "./token";

describe("#Token", () => {
  it("should generate and return token", () => {
    const userId = "123";
    const userToken = tokenManager.generateToken(userId) ?? "";
    expect(tokenManager.validateToken(userToken)).toBeTruthy();
  });

  it("token is invalid when used again ", () => {
    const userId = "123";
    const userToken = tokenManager.generateToken(userId) ?? "";
    // init first usage
    tokenManager.validateToken(userToken);
    const secondUsageIsValid = tokenManager.validateToken(userToken);
    expect(secondUsageIsValid).toBe(false);
  });

  it("invalidates token ", () => {
    const userToken = tokenManager.generateToken() ?? "";
    const oldToken = userToken;
    tokenManager.invalidateToken(oldToken);
    expect(tokenManager.validateToken(userToken)).toBe(false);
  });
});
