import type { User } from "./user";
export class UserDatabase {
  users: User[];

  constructor() {
    this.users = [];
    console.log("mount");
  }

  addUser(user: User): void {
    this.users = [...this.users, user];
  }
  removeUser(user: User): void {
    this.users = this.users.filter(($user) => $user.username !== user.username);
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
