import { useNavigate } from "react-router-dom";

export const LogOut: React.FC = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
       let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
       let allUsers =  JSON.parse(localStorage.getItem('authentication') || '[]')
       
       let findIndexOfCurrentUser = allUsers.findIndex((users:any) => users.email === currentUser.email && users.password === currentUser.password);
        allUsers[findIndexOfCurrentUser].status = false;
        currentUser.status = false;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        localStorage.setItem('authentication', JSON.stringify(allUsers));
        navigate('/auth/sign-in')
    }

    return(
        <>
            <button onClick={handleLogOut} className="btn btn-dark fw-400 px-3 mx-3 p-3 mt-3">Sign out</button>
        </>
    )
}
