import { describe, it, expect } from "vitest";
import { IdentityService } from "./identity";

describe("IdentityService", () => {
  const identityService = new IdentityService();

  it("#test registration success", () => {
    const registrationResult = identityService.registerUser(
      "john123",
      "password123"
    );
    expect(registrationResult).toBe("User registered successfully.");
  });
  it("#test registration failure", () => {
    const registrationResult = identityService.registerUser(
      "john123",
      "password123"
    );
    const registrationResult2 = identityService.registerUser(
      "john123",
      "password123"
    );
    expect(registrationResult2).toBe("Username already taken.");
  });

  it("#test authentication success", () => {
    const authenticationResult = identityService.authenticateUser(
      "john123",
      "password123"
    );
    expect(authenticationResult).toBe("Authentication successful.");
  });

  it("#test authentication failure", () => {
    const authenticationResult = identityService.authenticateUser(
      "john1234",
      "password1234"
    );
    expect(authenticationResult).toBe("Invalid username or password.");
  });
});
