import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { ErrorMessage, Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { BsArrowLeft } from "react-icons/bs";
import mark from "../../assets/mark.svg";
import CustomModal from "../../components/Modal";
import axios from "axios";
import { useSelector } from "react-redux";


const VerifyCode = ({ toggleAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("default");
  const [post, setPost] = useState([]);
  const [error, setErrorMsg] = useState("");

  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const handleClick = () => {
      setLoading(true);
      setStatus("verified");
      console.log(status);
      // after fail set status to default to return form
    };

  const initialValues = {
    name: "",
    email: "",
    phone_number: "",
    job_title: "",
  };

  const contactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    name: Yup.string().required("Full name is required"),
    phone_number: Yup.string().required("Phone number is required"),
    job_title: Yup.string().required("Employee Designation is required"),
  });

  const handleSubmit = (values) => {
    setLoading(true)
    console.log(values);

    const headers = {
        'Authorization': `Bearer ${userInfo.access_token}`
    }

    let dummy = {
      "email": "samdave@example.com",
      "phone_number": "+2349011111111",
      "name": "Sam",
      "job_title": "Customer Support"
    }
        axios
        .post("https://meal-tracker.onrender.com/auth/create-employee",values,{headers})
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        toggleAuth();
        console.log(post);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setLoading(false);
      });
  };

  return (
    <Modal>
      <div className="close__container" onClick={toggleAuth}>
        <IoMdClose />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={contactSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <form onSubmit={formik.handleSubmit} onKeyDown={()=>setErrorMsg("")}>
              <h3>Add new Employee</h3>

              <p>
                Please enter the details below to create a profile for a new
                employee{" "}
              </p>
              <p className="error">{error}</p>
              <ErrorMessage
                    name="name"
                    component="span"
                    className="error"
                  />
              <Field
                id="name"
                name="name"
                className={errors.name && touched.name ? "input-error" : null}
                type="text"
                placeholder="Employee Full Name"
              />
               <ErrorMessage
                    name="email"
                    component="span"
                    className="error"
                  />
              <Field
                id="email"
                name="email"
                type="email"
                className={errors.email && touched.email ? "input-error" : null}
                placeholder="Employee work email"
              />
               <ErrorMessage
                    name="phone_number"
                    component="span"
                    className="error"
                  />
              <Field
                id="phone_number"
                name="phone_number"
                type="phone"
                className={
                  errors.phone_number && touched.phone_number
                    ? "input-error"
                    : null
                }
                placeholder="Employee phone number"
              />
               <ErrorMessage
                    name="job_title"
                    component="span"
                    className="error"
                  />
              <Field
                id="job_title"
                name="job_title"
                type="text"
                className={
                  errors.job_title && touched.job_title ? "input-error" : null
                }
                placeholder="Employee Department"
              />
              <div className="button__container">
                <button type="submit">
                  <span >{loading ? "Loading..." : "Create Profile"}</span>
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
};

const Modal = styled.section`
  position: absolute;
  top: 18%;
  left: 25%;
  z-index: 10;
  width: 680px;
  padding: 24px 51px;
  padding-bottom: 32px;
  background: #ffffff;
  border-radius: 20px;

  .close__container {
    text-align: right;
    margin-bottom: 12px;
    margin-right: -12px;
    svg {
      width: 32px;
      height: 32px;
      color: #474747;
    }
    :hover {
      cursor: pointer;
    }
  }

  .icon__container {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    margin-bottom: 30px;
    color: var(--secondaryColor);
  }
  p {
    font-weight: 500;
    font-size: 22px;
    line-height: 189%;
    text-align: center;
    margin-bottom: 32px;
  }

  input {
    padding: 15px 20px;
    width: 580px;
    height: 70px;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    border: 1.5px solid #1f6df2;
    border-radius: 10px;
  }

  input + input {
    margin-top: 30px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    align-items: center;
    padding: 10px 25px;
    gap: 23px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    width: 600px;
    height: 62px;
    color: #fcfcfc;
    background: #1f6df2;
    border-radius: 10px;
  }
  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default VerifyCode;
