import { nanoid } from "nanoid";

export class TokenCoordinator {
  private tokens: Map<string, boolean>;

  constructor() {
    this.tokens = new Map();
  }

  generateToken(): string {
    // Invalid or expired token; generate a new one
    const newToken = nanoid();
    this.tokens.set(newToken, true);
    return newToken;
  }

  validateToken(token: string): boolean {
    if (this.tokens.has(token)) {
      this.tokens.delete(token);
      return true;
    }
    return false;
  }

  invalidateToken(token: string): void {
    this.tokens.delete(token);
  }
}
