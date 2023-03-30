import React from "react";
import { FiUserPlus } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <RiMenu2Fill className="menu"/>
        <button>
          <FiUserPlus />
          <span>Add New Employee</span>
        </button>
    </Container>
  );
};

const Container = styled.header`
    display: flex;
    justify-content: space-between; 
    margin-top: 70px;
    padding: 0 30px;
    padding-bottom: 70px;

    .menu{
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
    color: #FCFCFC;
    background: #1f6df2;
    border-radius: 8px;
  }
`;

export default Header;
