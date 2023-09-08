import { describe, it, expect } from "vitest";
import { TokenCoordinator } from ".";

describe("#Token", () => {
  it("should generate and return token", () => {
    const tokenCoordinator = new TokenCoordinator();
    const userToken = tokenCoordinator.generateToken() ?? "";
    expect(tokenCoordinator.validateToken(userToken)).toBe(true);
  });

  it("token is invalid when used again ", () => {
    const tokenCoordinator = new TokenCoordinator();
    const userToken = tokenCoordinator.generateToken() ?? "";
    // init first usage
    tokenCoordinator.validateToken(userToken);
    const secondUsageIsValid = tokenCoordinator.validateToken(userToken);
    expect(secondUsageIsValid).toBe(false);
  });

  it("invalidates token ", () => {
    const tokenCoordinator = new TokenCoordinator();
    const userToken = tokenCoordinator.generateToken() ?? "";
    const oldToken = userToken;
    tokenCoordinator.invalidateToken(oldToken);
    expect(tokenCoordinator.validateToken(userToken)).toBe(false);
  });
});
