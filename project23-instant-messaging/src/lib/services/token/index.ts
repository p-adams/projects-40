import { TokenCoordinator } from "$lib/models/token";

export class TokenService {
  private tokenCoordinator: TokenCoordinator;
  private currentToken: string | null;
  private newToken: string | null;

  constructor() {
    this.tokenCoordinator = new TokenCoordinator();
    this.currentToken = null;
    this.newToken = null;
  }

  // Issue a new token to the user
  issueToken(): string {
    const token = this.tokenCoordinator.generateToken();
    this.currentToken = token;
    this.newToken = null; // Clear the new token reference
    return token;
  }

  // Revoke the current token when the user logs out or quits the session
  revokeToken(token: string): void {
    this.tokenCoordinator.invalidateToken(token);
    if (this.currentToken === token) {
      this.currentToken = null;
    }
    if (this.newToken === token) {
      this.newToken = null;
    }
  }

  // Generate a new token and swap it with the old token
  generateNewToken(): string {
    if (!this.currentToken) {
      throw new Error("No current token available");
    }

    const newToken = this.tokenCoordinator.generateToken();
    this.tokenCoordinator.invalidateToken(this.currentToken);
    this.currentToken = newToken;
    this.newToken = newToken;
    return newToken;
  }

  // Validate a token
  validateToken(token: string): boolean {
    return this.tokenCoordinator.validateToken(token);
  }

  // Get the current token
  getCurrentToken(): string | null {
    return this.currentToken;
  }

  // Get the new token
  getNewToken(): string | null {
    return this.newToken;
  }
}
