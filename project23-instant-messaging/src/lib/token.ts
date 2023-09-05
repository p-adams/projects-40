import { nanoid } from "nanoid";

export const tokenManager = {
  tokens: new Map(),

  generateToken() {
    const token = nanoid();
    this.tokens.set(token, true);
    return token;
  },

  validateToken(token: string) {
    if (this.tokens.has(token)) {
      this.tokens.delete(token);
      return true;
    }
    return false;
  },

  // Optional: Allow users to reuse their previously generated tokens
  userTokens: new Map(),

  generateUserToken(userId: string) {
    if (this.userTokens.has(userId)) {
      return this.userTokens.get(userId);
    } else {
      const userToken = this.generateToken();
      this.userTokens.set(userId, userToken);
      return userToken;
    }
  },
};
