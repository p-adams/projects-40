import { TokenManager } from "$lib/models/token";

export class TokenService {
  private tokenManager: TokenManager;

  constructor() {
    this.tokenManager = new TokenManager();
  }

  // Issue a new token to the user
  issueToken(): string {
    return this.tokenManager.generateToken();
  }

  // Revoke the current token when the user logs out or quits the session
  revokeToken(token: string): void {
    this.tokenManager.invalidateToken(token);
  }

  // Generate a new token and swap it with the old token
  generateNewToken(oldToken: string): string {
    const newToken = this.tokenManager.generateToken();

    // Revoke the old token and issue the new one
    this.revokeToken(oldToken);

    return newToken;
  }
}

// Example usage:
// const tokenService = new TokenService();
// const userToken = tokenService.issueToken();

// When the user logs out or quits the session, revoke the token:
// tokenService.revokeToken(userToken);

// If the user wants to save progress and generate a new token:
// const newToken = tokenService.generateNewToken(userToken);
