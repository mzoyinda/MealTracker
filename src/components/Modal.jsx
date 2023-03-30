import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import mark from "../assets/mark.svg";

const CustomModal = ({
  title,
  type,
  details,
  button,
  buttonIcon,
  toggleAuth,
}) => {
  return (
    <Modal>
      <div className="close__container" onClick={toggleAuth}>
        <IoMdClose />
      </div>
      {type === "success" ? (
        <div className="icon__container">
          <img src={mark} alt="" />
        </div>
      ) : (
        " "
      )}
      <h3 className={type === "fail" ? "fail" : ""}>{title}</h3>
      <p>{details}</p>
      <div className="button__container">
        <button>
          {buttonIcon === "true" ? <BsArrowLeft /> : ""}
          <span onClick={toggleAuth}>{button}</span>
        </button>
      </div>
    </Modal>
  );
};

const Modal = styled.section`
  position: absolute;
  top: 55%;
  left: 35%;
  z-index: 10;
  width: 500px;
  padding: 24px 51px;
  padding-bottom: 32px;
  background: #ffffff;
  border-radius: 20px;

  .fail{
    color:#FA1919;
  }

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

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    background: transparent !important;
    color: #333333 !important;
    font-size: 20px;
    line-height: 30px;
    padding: 12px 25px;
    gap: 15px;
    width: 240px !important;
    height: 51px;
    border: 2px solid #1f6df2 !important;
    border-radius: 10px;
  }
  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CustomModal;
