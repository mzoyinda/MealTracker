import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const General = () => {
  return (
    <Container>
      <div className="wrapper">
        <h1>Sign In</h1>
        <p>Choose an option that best suits your designation</p>
        <div className="btn__group">
          <Link to="/sign-in">
            <button>Catering Vendor</button>
          </Link>
          <Link to="/sign-in">
            <button>Employee</button>
          </Link>
          <Link to="/sign-in">
            <button>Admin</button>
          </Link>
        </div>
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
      margin-bottom: 81px;
    }

    .btn__group{
        display: flex;
        flex-direction: column;
        gap: 30px;       

        button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          font-size: 18px;
          line-height: 27px;
          padding: 15px 40px;
          background: transparent;
          width: 627px;
          height: 70px;
          border: 1.5px solid #1f6df2;
          border-radius: 10px;
        }
    }
    
  }
`;

export default General;
