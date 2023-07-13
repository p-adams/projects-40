import { User } from "../data/user";
import { UserDatabase } from "../data/userDb";
import { EntryService } from "./entry";

export class IdentityService {
  userDatabase: UserDatabase;

  constructor() {
    this.userDatabase = new UserDatabase();
  }

  registerUser(username: string, password: string): string {
    // Check if the username is already taken
    if (this.userDatabase.findUserByUsername(username) !== null) {
      return "Username already taken.";
    }

    // Create a new User object with the provided username and password

    const entryListService = new EntryService();
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.entryListId = entryListService.createEntryList();
    // Add the new user to the database
    this.userDatabase.addUser(newUser);

    return "User registered successfully.";
  }

  // Method to authenticate a user
  authenticateUser(username: string, password: string): string {
    // Find the user in the database by username
    const user = this.userDatabase.findUserByUsername(username);

    // Check if the user exists and the password matches
    if (user !== null && user.password === password) {
      return "Authentication successful.";
    } else {
      return "Invalid username or password.";
    }
  }
}

// Usage Example:

// Create an instance of the IdentityService
const identityService = new IdentityService();

// Register a new user
const registrationResult = identityService.registerUser(
  "john123",
  "password123"
);
console.log(registrationResult);

// Authenticate a user
const authenticationResult = identityService.authenticateUser(
  "john123",
  "password123"
);
console.log(authenticationResult);
