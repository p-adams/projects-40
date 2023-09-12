import { TokenCoordinator } from "$lib/models/token";
import { logInstance } from "../log/logInstance";

export class TokenService {
  private tokenCoordinator: TokenCoordinator;
  private currentToken: string | null;
  private tokenHistory: string[];

  constructor() {
    this.tokenCoordinator = new TokenCoordinator();
    this.currentToken = null;
    this.tokenHistory = [];
  }

  // Issue a new token to the user
  issueToken(): string {
    const token = this.tokenCoordinator.generateToken();
    this.currentToken = token;
    this.tokenHistory.push(token);
    logInstance.create({
      type: "ISSUE_TOKEN",
      description: "Issue a new token to the user",
      timestamp: new Date().toLocaleDateString(),
    });
    return token;
  }

  // Revoke the current token when the user logs out or quits the session
  revokeToken(token: string): void {
    this.tokenCoordinator.invalidateToken(token);
    if (this.currentToken === token) {
      this.currentToken = null;
    }
  }

  // Generate a new token and swap it with the old token
  generateNewToken(): string {
    if (!this.currentToken) {
      logInstance.create({
        type: "GENERATE_TOKEN",
        description: "No current token available",
        timestamp: new Date().toLocaleDateString(),
      });
      throw new Error("No current token available");
    }

    const newToken = this.tokenCoordinator.generateToken();
    this.tokenCoordinator.invalidateToken(this.currentToken);
    this.currentToken = newToken;
    this.tokenHistory.push(newToken);
    logInstance.create({
      type: "GENERATE_TOKEN",
      description: "Generate a new token and swap it with the old token",
      timestamp: new Date().toLocaleDateString(),
    });
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

  // Get all tokens in the history
  getTokenHistory(): string[] {
    return this.tokenHistory;
  }
}
