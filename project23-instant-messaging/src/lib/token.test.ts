import { describe, it, expect } from "vitest";
import { TokenManager } from "./token";

describe("#Token", () => {
  it("should generate and return token", () => {
    const tokenManager = new TokenManager();
    const userToken = tokenManager.generateToken() ?? "";
    expect(tokenManager.validateToken(userToken)).toBe(true);
  });

  it("token is invalid when used again ", () => {
    const tokenManager = new TokenManager();
    const userToken = tokenManager.generateToken() ?? "";
    // init first usage
    tokenManager.validateToken(userToken);
    const secondUsageIsValid = tokenManager.validateToken(userToken);
    expect(secondUsageIsValid).toBe(false);
  });

  it("invalidates token ", () => {
    const tokenManager = new TokenManager();
    const userToken = tokenManager.generateToken() ?? "";
    const oldToken = userToken;
    tokenManager.invalidateToken(oldToken);
    expect(tokenManager.validateToken(userToken)).toBe(false);
  });
});
