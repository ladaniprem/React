import conf from '../conf/Conf.js';
import { Client, Account } from 'appwrite';

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID
            this.account = new Account(this.client);
    }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;