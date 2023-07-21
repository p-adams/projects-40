import { User } from "../data/user";
import { UserDatabase } from "../data/userDb";
import { EntryService } from "./entry";

export class IdentityService {
  userDatabase: UserDatabase;

  constructor() {
    this.userDatabase = new UserDatabase();
  }

  registerUser(
    username: string,
    password: string
  ): { success: boolean; msg: string } {
    // Check if the username is already taken
    if (this.userDatabase.findUserByUsername(username) !== null) {
      return { success: false, msg: "Username already taken." };
    }

    // Create a new User object with the provided username and password
    const entryListService = new EntryService();
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.entryListId = entryListService.createEntryList();
    // Add the new user to the database
    this.userDatabase.addUser(newUser);

    return { success: true, msg: "User registered successfully." };
  }

  // Method to authenticate a user
  authenticateUser(
    username: string,
    password: string
  ): { success: boolean; msg: string } {
    // Find the user in the database by username
    const user = this.userDatabase.findUserByUsername(username);

    // Check if the user exists and the password matches
    if (user !== null && user.password === password) {
      return { success: true, msg: "Authentication successful." };
    } else {
      return { success: false, msg: "Invalid username or password." };
    }
  }
}
