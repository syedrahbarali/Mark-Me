import { Client, Account, Databases, Query } from "appwrite";
import { config } from "../config/config";
const {
  appwriteURL,
  appwriteProjectID,
  appwriteDatabaseID,
  appwriteEmployeeCollectionID,
} = config;

class AuthService {
  client = new Client();
  account;
  databases;

  constructor() {
    this.client.setEndpoint(appwriteURL).setProject(appwriteProjectID);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  login = async ({ email, password }) => {
    try {
      const auth = await this.account.createEmailPasswordSession(
        email,
        password
      );

      // console.log(auth);

      if (auth.$id) {
        const employee = await this.databases.listDocuments(
          appwriteDatabaseID,
          appwriteEmployeeCollectionID,
          [Query.equal("empId", auth.userId)]
        );
        // console.log(employee);
        const { phone, role } = employee.documents[0];
        return { ...auth, phone, role };
      }
    } catch (err) {
      throw err;
    }
  };

  getAccount = async () => {
    try {
      return await this.account.get();
    } catch (err) {
      console.log(err);
      throw err;
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
