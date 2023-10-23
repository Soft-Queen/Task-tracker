import React from "react";
import { Link } from "react-router-dom";

export const SignIn: React.FC = () => {
    return (
        <>
            <div className="authentication animate__animated animate__fadeInUp animate__delay-.2s">
                <div className="container-fluid h-100 p-0">
                    <div className="row g-0">
                        <div className="col-md-7 authentication--img" />
                        <div className="col-md-5">
                            <div className="card rounded-0 h-100 border-0 authentication__card">
                                <form className="my-5 py-5">
                                    <div className="row m-2 pt-5 mt-5 py-5 my-5">
                                        <h3 className="text-center mb-3 authentication--title">Sign In </h3>
                                        <div className="col-12 mb-3">
                                        <label htmlFor="fullname" className="mb-1">Email Address</label>
                                            <input type="text" className="form-control p-3 px-3 authentication--input" placeholder="Email Address" />
                                        </div>
                                        <div className="col-12 mb-3">
                                        <label htmlFor="fullname" className="mb-1">Password</label>
                                            <input type="text" className="form-control p-3 px-3 authentication--input" placeholder="Password" />
                                        </div>
                                        <div className="col-12 mb-2">
                                            <p className="text-end">Don't have an account? <b><Link to="/">Sign Up</Link></b></p>
                                        </div>
                                        <div className="col-12 mb-3">
                                            <input type="submit" value="Sign In" className="authentication--btn p-3" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 