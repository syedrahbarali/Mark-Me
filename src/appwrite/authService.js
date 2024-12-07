import { Client, Account } from "appwrite";
import config from "../config/config";
const { appwriteURL, appwriteProjectID } = config;

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(appwriteURL).setProject(appwriteProjectID);
    this.account = new Account(this.client);
  }
}

const authService = new AuthService();
export default authService;
