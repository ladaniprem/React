import conf from '../conf/Conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
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
          return await this.account.createEmailPasswordSession(email, password);
        } 
        catch (error) {
            throw new error("Error logging in: " + error.message);
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