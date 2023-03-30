import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = ({user}) => {
  return (
    <Container>
      <div className="wrapper">
        <h1>Sign In</h1>
        <p>Enter your credentials to sign in</p>
        <form>
          <div className="form__group">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Enter Password" />
          </div>
          <p className="blue__text">Forgot Password ?</p>
         <Link to="/admin">
             <button>Sign In</button>
        </Link>
        </form>
      </div>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .wrapper {
    background: white;
    padding: 55px;
    width: 737px;
    /* height: 500px; */
    border: 2px dashed #1f6df2;
    border-radius: 20px;

    h1 {
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      margin-bottom: 20px;
      color: var(--secondaryColor);
    }
    p {
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #333333;
      margin-bottom: 53px;
    }

    .form__group {
      display: flex;
      flex-direction: column;
      gap: 40px;

      input {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px 25px;
        gap: 11px;
        width: 650px;
        height: 70px;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        color: #555555;
        border: 1.5px solid #000000;
        border-radius: 10px;
      }
    }

    p.blue__text {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #1f6df2;
      margin-top: 21px;
      margin-bottom: 53px;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px 40px;
      gap: 16px;
      width: 650px;
      font-weight: 600;
      font-size: 28px;
      line-height: 42px;
      color: #fcfcfc;
      height: 65px;
      background: #1f6df2;
      border-radius: 10px;
    }
  }
`;

export default SignIn;
