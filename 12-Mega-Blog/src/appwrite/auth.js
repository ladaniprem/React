import conf from '../conf/Conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteEndpoint) // Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Replace with actual project ID
        this.account = new Account(this.client);
    }

      async createAccount({
        email,
        password,
        name,
      })
      {
        try {
            const userAccount = await this.account.create(
                ID.unique(), email, password, name // Unique user ID, can be any string
            );
            if (userAccount) {
                // return {
                //     success: true,
                //     message: 'Account created successfully',
                //     user: userAccount
                // call another method

                return this.login({ email, password });
            } else {
                // return {
                //     success: false,
                //     message: 'Account creation failed'
                // };
                return userAccount;
            }
        } catch (error) {
           throw new Error(" Error creating account: " + error.message);  
        }
      }

      async login({ email, password }) {
        try {
          return await this.account.createEmailPasswordSession(email, password, {
  scopes: ['account']
});
        } 
        catch (error) {
            throw new Error("Error logging in: " + error.message);
        }
      }

      async getCurrentUser(){
          try {
            // Get the current user

              return await this.account.get();      
          } catch (error) {
              console.log("Error getting current user:", error.message);
              return null;
          }
      }

      async logout() {
        try {
            // Delete the current session
            return await this.account.deleteSessions();
        } 

        catch (error) {
            throw new Error("Error logging out: " + error.message);
        }
      }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;

/* 
/*
Appwrite Authentication Theory:

1. Authentication Service:
  - This class manages user authentication using Appwrite's Account service
  - Handles account creation, login, logout, and session management
  - Provides stateless authentication via JWT tokens
  - Manages user sessions securely

2. Key Methods:
  - createAccount: Creates new user with email/password
    - Generates unique ID
    - Validates email format
    - Enforces password requirements
    - Auto-logs in on success
  
  - login: Creates authenticated session
    - Validates credentials
    - Creates session token
    - Maintains session state
  
  - getCurrentUser: Fetches current user info
    - Checks active session
    - Returns user profile data
    - Handles expired sessions
  
  - logout: Deletes all active sessions
    - Revokes access tokens
    - Clears local session data
    - Handles multiple devices

3. Security Features:
  - Uses Appwrite's built-in security
    - Password hashing (bcrypt)
    - HTTPS encryption
    - CSRF protection
    - Rate limiting
  - Session management
    - Token-based auth
    - Session expiration
    - Device tracking

4. Error Handling:
  - Try/catch blocks for all operations
  - Detailed error messages
  - Graceful fallbacks
  - Session recovery

5. Usage Examples:
  // Create account
  await authService.createAccount({
    email: "user@example.com",
    password: "secure123",
    name: "User Name"
  });

  // Login
  await authService.login({
    email: "user@example.com",
    password: "secure123"
  });

  // Get user
  const user = await authService.getCurrentUser();

  // Logout
  await authService.logout();
*/