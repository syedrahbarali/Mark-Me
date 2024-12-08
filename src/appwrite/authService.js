import { Client, Account } from "appwrite";
import { config } from "../config/config";
const { appwriteURL, appwriteProjectID } = config;

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(appwriteURL).setProject(appwriteProjectID);
    this.account = new Account(this.client);
  }

  login = async ({ email, password }) => {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      console.error(err);
    }
  };
}

const authService = new AuthService();
export default authService;
