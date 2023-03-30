import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    return (
        <div className="container">
            <div className="row justify-content-center p-100">
                <div className="col-md-8 col-lg-6">
                    <div className="card">
                        <div className="card-body p-5">
                            <h1 className="text-brand-primary fw-bold">Set Password</h1>
                            <p>Set a strong password  to access your profile</p>
                            <form>
                                <div className="form__group">
                                    <input type="email" placeholder="Email address" className="form-input mb-3" value="samdave@example.com" disabled/>
                                    <input type="password" placeholder="Enter Password" className="form-input mb-3" />
                                    <input type="password" placeholder="Enter new Password" className="form-input" />
                                </div>
                                <Link to="/employee" className="btn btn-brand-primary w-100 mt-4">
                                    Submit
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SignIn;
