import { User } from "../data/user";
import { UserDatabase } from "../data/userDb";

export class IdentityService {
  #userDatabase: UserDatabase;
  #me: User | null = null; // Initialize me as null to represent no logged-in user
  static instance = null; // Static property to hold the single instance

  constructor() {
    // Check if an instance already exists; if yes, return it
    if (IdentityService.instance) {
      return IdentityService.instance;
    }

    IdentityService.instance = this;
    this.#userDatabase = new UserDatabase();
  }

  registerUser(
    username: string,
    password: string
  ): { success: boolean; msg: string } {
    // Check if the username is already taken
    if (this.#userDatabase.findUserByUsername(username) !== null) {
      return { success: false, msg: "Username already taken." };
    }

    // Create a new User object with the provided username and password
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.entryListId = "";

    // Add the new user to the database
    this.#userDatabase.addUser(newUser);

    // Set the current user after successful registration
    this.#me = newUser;

    return { success: true, msg: "User registered successfully." };
  }

  // Method to authenticate a user
  authenticateUser(
    username: string,
    password: string
  ): { success: boolean; msg: string } {
    const user = this.#userDatabase.findUserByUsername(username);

    // Check if the user exists and the password matches
    if (user !== null && user.password === password) {
      // Set the current user after successful authentication
      this.#me = user;

      return { success: true, msg: "Authentication successful." };
    } else {
      return { success: false, msg: "Invalid username or password." };
    }
  }

  // Method to log out the current user
  logOut(): void {
    this.#me = null;
  }

  // Getter for the current user
  getUser(): User | null {
    return this.#me;
  }
}
