import type { User } from "./user";
export class UserDatabase {
  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  findUserByUsername(username: string): User | null {
    for (const user of this.users) {
      if (user.username === username) {
        return user;
      }
    }
    return null;
  }
}
