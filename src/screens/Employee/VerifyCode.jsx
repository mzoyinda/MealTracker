import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft} from "react-icons/bs";

const VerifyCode = ({showModal, setShowModal}) => {
  return (
    <Modal>
      <div className="close__container" onClick={()=>setShowModal(!showModal)}>
        <IoMdClose />
      </div>
      <h3>Code Verified</h3>
      <p>
      Your order has been received, Do enjoy your meal !
      </p>
      <div className="button__container">
      <button>
        <BsArrowLeft/>
        <span onClick={()=>setShowModal(!showModal)}>Back to Home</span>
      </button>
      </div>
    </Modal>
  )
}

const Modal = styled.section`
    position: absolute;
    top: 25%;
    left: 35%;
    z-index: 10;
    width: 467px;
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
      :hover{
  cursor: pointer;
}
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

    button{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px 25px;
      gap: 23px;
      width: 236.33px;
      font-weight: 500;
  border-color: transparent;
      font-size: 20px;
      line-height: 30px;
      color: #fcfcfc;
      height: 50px;
      background: var(--secondaryColor);
      border-radius: 10px;
    }
    .button__container{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
`;

export default VerifyCode