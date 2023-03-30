import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../assets/user.png";
import GenerateCode from "./GenerateCode";
import VerifyCode from "./VerifyCode";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleAuth = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      {showModal ? <div className="overlay"></div> : ""}
      <header className="user__badge">
        <img src={user} alt="user" />
        <h1>Olaoluwa Sharon</h1>
        <p>Customer service support</p>
      </header>
      <section className="generate__code">
        <div className="prompt">
          <p className="date">24th Of April, 2023</p>
          <h2>Ready to eat?</h2>
          <p>
            Your code for today is ready, click on the button to send a request
          </p>
        </div>
        <button onClick={toggleAuth} >
          Generate code
        </button>
      </section>
      {showModal ? 
      <GenerateCode showModal={showModal} setShowModal={setShowModal} />
    : ""}
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  padding: 97px;
  z-index: 100;
  padding-bottom: 0;
  height: 100vh;

  .user__badge {
    margin-bottom: 100px;

    img {
      width: 71px;
      height: 71px;
      object-fit: cover;
    }
    h1 {
      font-weight: 500;
      font-size: 28px;
      line-height: 42px;
    }
    p {
      font-weight: 200;
      font-size: 22px;
      line-height: 33px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: #00000090;
    width: 100vw;
    z-index: 1;
    height: 100%;
  }

  section.generate__code {
    background: var(--primaryColor);
    border-radius: 20px;
    padding: 45px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .prompt {
      width: 523px;
      p.date {
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 20px;
        color: var(--secondaryColor);
      }

      h2 {
        font-weight: 500;
        font-size: 28px;
        line-height: 42px;
        margin-bottom: 12px;
      }
      p {
        font-weight: 400;
        font-size: 22px;
        line-height: 167.5%;
      }
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px 40px;
      gap: 16px;
      border-color: transparent;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
      width: 230px;
      height: 68px;
      background: #1f6df2;
      border-radius: 10px;
    }
  }
`;

export default Index;
