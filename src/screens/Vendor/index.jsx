import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import vendor from "../../assets/vendor.png";
import { Link } from "react-router-dom";
import Table from "../../components/Table";
import InputCode from "./VerifyCode";
import { useState } from "react";

const Index = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleAuth = () => {
      setShowModal(!showModal);
    };

  return (
    <Container>
        {showModal ? <div className="overlay"></div> : ""}
        <div className="top__section">
      <header className="user__badge">
        <img src={vendor} alt="" />
        <h1>Savoury Food Services</h1>
        <p>Caterer/ Food Organizer</p>
      </header>
      <section className="prompt">
        <p className="date">24th Of April, 2023</p>
        <h2>Ready to Serve?</h2>
        <p>
          Every employee has a unique code to access their meal for the day,
        </p>
        <p>
          {" "}
          <strong>
            Ensure to verify each code before you proceed to serve.
          </strong>
        </p>
      </section>
      <div className="input__container">
        <form className="box">
          <input
            type="text"
            placeholder="search by employee name or designation "
          />
          <button to="/vendor">
          <CiSearch />
          </button>
        </form>
      </div>
        </div>
        <Table toggleAuth={toggleAuth} />
        {showModal ? 
      <InputCode toggleAuth={toggleAuth} />
    : "" }
    </Container>
  );
};

const Container = styled.main`
  padding: 61px 46px;

  .input__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 72px;

    .box {
      width: 578px;
      border: 2px solid #1f6df2;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 80%;
        border: transparent;
        margin: 5px 0;
        padding: 13px 0;
        font-weight: 200;
        font-size: 18px;
        line-height: 27px;
      }
      svg {
        margin-left: 12px;
        width: 30px;
        height: 30px;

        :hover {
          cursor: pointer;
        }
      }
      button{
        width: 40px;
        background: transparent;
        color:  #111111;
        padding: 0;
        border: none;
      }
    }
  }

  .user__badge {
    margin-bottom: 80px;
    margin-left: 12px;

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
    position: fixed;
    top: 0;
    left: 0;
    background: #00000090;
    width: 100vw;
    z-index: 1;
    height: 100vh;
  }

  section.prompt {
    background: var(--primaryColor);
    border-radius: 20px;
    padding: 45px 40px;

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
`;

export default Index;
