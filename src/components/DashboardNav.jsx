import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/brand.png";
import user from "../assets/admin.png";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const DashboardNav = () => {

  const dispatch = useDispatch();
  
  const logoutHandler = () => {
    dispatch(logout());
      };

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="flexbox">
      <div className="user__badge">
        <img src={user} className="user" alt="user" />
        <div className="box">
          <p className="blue">Olakunle-Williams</p>
          <p className="title">Admin</p>
        </div>
      </div>
      <button className="logout" onClick={logoutHandler}>
        Logout
      </button>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  border-bottom: 1px solid #474747;
  background: var(--primaryColor);
  display: flex;
  justify-content: space-between;

  img {
    width: 164px;
    object-fit: cover;
    margin: 20px 27px 11px;
  }

  .flexbox{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 10px;
      width: 129px;
      margin-right: 40px;
      height: 43px;
      color: #1f6df2;
      background: transparent;
      border: 2px solid #1f6df2;
      border-radius: 10px;
    }
  }

  .user__badge {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 25px;

    img.user {
      width: 45px;
      height: 45px;
    }
    .blue {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      display: flex;
      margin: 0;
      align-items: center;
      color: #1f6df2;
    }
    .title {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin: 0;
      color: #333333;
    }
  }
`;

export default DashboardNav;
