import { nanoid } from "nanoid";

export const tokenManager = {
  tokens: new Map(),

  generateToken(existingToken?: string) {
    if (existingToken && this.tokens.has(existingToken)) {
      return existingToken;
    }

    // Invalid or expired token; generate a new one
    const newToken = nanoid();
    this.tokens.set(newToken, true);
    return newToken;
  },

  validateToken(token: string) {
    if (this.tokens.has(token)) {
      this.tokens.delete(token);
      return true;
    }
    return false;
  },

  invalidateToken(token: string) {
    this.tokens.delete(token);
  },
};
