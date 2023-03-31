import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/userActions";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [activeUser, setActiveUser] = useState("");

  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;
  // const redirect = `/${userType}`;

  const checkUserInfo = () => {
    if (userInfo) {
      const activeUser = userInfo.user.user_type;
      console.log(userInfo, activeUser);

      // if (location.state?.from) {
      //  navigate(location.state.from);
      // }
      if (activeUser === "admin") {
        navigate("/admin");
      } else if (activeUser === "caterer") {
        navigate("/vendor");
      } else {
        navigate("/employee");
      }
    }
  };

  useEffect(() => {
    checkUserInfo();
  }, [userInfo]);

  const initialValues = {
    email: "",
    password: "",
  };

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
  dispatch(login(values.email, values.password));

   setActiveUser(userInfo.user.user_type)
      // const activeUser = userDetails;
      console.log(activeUser)
        navigate(`/${activeUser}`);
  };

  return (
    <div className="container">
      <div className="row justify-content-center p-100">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body p-5">
              <Formik
                initialValues={initialValues}
                validationSchema={contactSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                {(formik) => {
                  const { errors, touched } = formik;
                  return (
                    <form onSubmit={formik.handleSubmit}>
                      <h1 className="text-brand-primary fw-bold">Sign In</h1>
                      <p>Enter your credentials to sign in</p>
                      <Toaster>
                        {(t) => (
                          <ToastBar
                            toast={t}
                            style={{
                              ...t.style,
                              animation: t.visible
                                ? "custom-enter 1s ease"
                                : "custom-exit 1s ease",
                            }}
                          />
                        )}
                      </Toaster>
                      <div className="form__group">
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                        <Field
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Email address"
                          className="form-input mb-3"
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="error"
                        />
                        <Field
                          id="password"
                          name="password"
                          type="password"
                          placeholder="Enter Password"
                          className="form-input"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-brand-primary w-100 mt-4"
                      >
                        {loading? "Loading..." : "Sign In"}
                        
                      </button>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
