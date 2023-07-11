class User {
  #username!: string;
  #password!: string;

  public set username(v: string) {
    this.#username = v;
  }

  public get username(): string {
    return this.#username;
  }

  public set password(v: string) {
    this.#password = v;
  }

  public get password(): string {
    return this.#password;
  }
}

class UserDatabase {
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

class IdentityService {
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
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;

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
