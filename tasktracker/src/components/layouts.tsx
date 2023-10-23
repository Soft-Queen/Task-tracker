import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SignUp } from "../pages/sign-up";

export const Layout: React.FC  = () => {
    return(
        <>
            <div>
                <SignUp />
                <Outlet />
            </div>
        </>
    )   
}