import { Client, Databases, ID, Query } from "appwrite";
import { config } from "../config/config";
const {
  appwriteURL,
  appwriteProjectID,
  appwriteDatabaseID,
  appwriteEmployeeCollectionID,
  appwriteAttendanceCollectionID,
} = config;

class EmployeeService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(appwriteURL).setProject(appwriteProjectID);
    this.databases = new Databases(this.client);
  }

  markAttendance = async (empId, loginDateTime) => {
    try {
      const attendance = await this.databases.createDocument(
        appwriteDatabaseID,
        appwriteAttendanceCollectionID,
        ID.unique(),
        {
          empId,
          loginDateTime,
          status: "Present",
        }
      );

      if (attendance.$id) return true;
    } catch (err) {
      throw err;
    }
  };
}

const employeeService = new EmployeeService();
export default employeeService;
