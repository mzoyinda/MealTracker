import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const General = () => {
  return (
      <div className="container">
        <div className="row justify-content-center p-100">
          <div className="col-md-8 col-lg-6">
            <div className="card">
              <div className="card-body p-5">
                <h1 className="text-brand-primary fw-bold">Sign In</h1>
                <p>Choose an option that best suits your designation</p>
                <div>
                  <Link to="/sign-in" className="btn btn-brand-dark-outline w-100 mb-4">
                    Catering Vendor
                  </Link>
                  <Link to="/sign-in" className="btn btn-brand-dark-outline w-100 mb-4">
                    Employee
                  </Link>
                  <Link to="/sign-in" className="btn btn-brand-dark-outline w-100 mb-4">
                    Admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default General;
