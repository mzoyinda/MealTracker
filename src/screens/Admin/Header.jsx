import React, { useState } from "react";
import { FiUserPlus } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import NewUser from "./NewUser";
import styled from "styled-components";

const Header = () => {
    const Navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const toggleAuth = () => {
      setShowModal(!showModal);
    };

  return (
    <Container>
      {showModal ? <div className="overlay"></div> : ""}
    <div className="flexbox">
    <RiMenu2Fill className="menu" />
      <button onClick={toggleAuth}>
        <FiUserPlus />
        <span>Add New Employee</span>
      </button>
    </div>
      <div className="cards" onClick={()=>Navigate("/admin/manage-users")}>
        <div className="card">
          <p>All Employees</p>
          <h2>1000</h2>
        </div>
        <div className="card card2">
          <p>Employees- Not Eaten</p>
          <h2>300</h2>
        </div>
        <div className="card card3">
          <p>Employees- Eaten</p>
          <h2>700</h2>
        </div>
      </div>
      {showModal ? 
      <NewUser toggleAuth={toggleAuth} />
    : "" }
    </Container>
  );
};

const Container = styled.header`
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: #00000090;
    width: 100vw;
    z-index: 1;
    height: 100vh;
  }

.flexbox{
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  padding: 0 30px;
  padding-bottom: 70px;

  .menu {
    width: 73px;
    height: 41px;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    padding: 15px 24px;
    gap: 17px;
    width: 272px;
    height: 58px;
    border: transparent;
    color: #fcfcfc;
    background: #1f6df2;
    border-radius: 8px;
  }
    
}
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 46px;
    color: #fcfcfc;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 50px;
      gap: 21px;
      width: 340px;
      /* height: 182px; */
      background: #2a42bc;
      border-radius: 20px;
    }

    .card2 {
      background: #0093b3;
    }
    .card3 {
      background: #9747ff;
    }
  }
`;

export default Header;
