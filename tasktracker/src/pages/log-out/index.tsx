import { useNavigate } from "react-router-dom";

export const LogOut: React.FC = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('currentUser');
        navigate('/auth/sign-in')
    }

    return(
        <>
            <button onClick={handleLogOut} className="btn btn-dark fw-400 px-3 mx-3 p-3 mt-3">Sign out</button>
        </>
    )
}
