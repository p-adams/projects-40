import { describe, it, expect } from "vitest";
import { IdentityService } from "./identity";

describe("IdentityService", () => {
  const identityService = new IdentityService();
  it("#test registration", () => {
    const registrationResult = identityService.registerUser(
      "john123",
      "password123"
    );
    expect(registrationResult).toBe("User registered successfully.");
  });
  it("#test authentication", () => {
    const authenticationResult = identityService.authenticateUser(
      "john123",
      "password123"
    );
    expect(authenticationResult).toBe("Authentication successful.");
  });
});
