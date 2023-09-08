import { beforeEach, describe, expect, it } from "vitest";
import { TokenService } from "./";

describe("TokenService", () => {
  let tokenService: TokenService;

  beforeEach(() => {
    tokenService = new TokenService();
  });

  it("should issue a new token", () => {
    const token = tokenService.issueToken();
    expect(token).toMatch(/^[0-9A-Za-z_-]{21}$/); // Assuming nanoid generates 21-character tokens
  });

  it("should revoke a token", () => {
    const token = tokenService.issueToken();
    tokenService.revokeToken(token);
    expect(tokenService.validateToken(token)).toBe(false);
  });

  it("should generate a new token and revoke the old one", () => {
    const oldToken = tokenService.issueToken();
    const newToken = tokenService.generateNewToken();

    // Old token should be revoked
    expect(tokenService.validateToken(oldToken)).toBe(false);

    // New token should be valid
    expect(tokenService.validateToken(newToken)).toBe(true);
  });
});
