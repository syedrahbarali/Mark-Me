export const config = {
  appwriteURL: import.meta.env.VITE_APPWRITE_URL,
  appwriteProjectID: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteAttendanceCollectionID: import.meta.env
    .VITE_APPWRITE_ATTENDANCE_COLLECTION_ID,
  appwriteEmployeeCollectionID: import.meta.env
    .VITE_APPWRITE_EMPLOYEE_COLLECTION_ID,
};
