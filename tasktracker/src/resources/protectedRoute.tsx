import { Navigate } from "react-router-dom";
import { TaskList } from "../pages/task-list/taskList";


const checkAuthenticatedUser = () => {
    const user_token = localStorage.getItem('currentUser' || {});
    return user_token && true
 
 }

 export const ProtectedRoute = () => {
    const isAuthenticated = checkAuthenticatedUser();
    return isAuthenticated ? <TaskList /> : <Navigate to="/auth/sign-in" />
}