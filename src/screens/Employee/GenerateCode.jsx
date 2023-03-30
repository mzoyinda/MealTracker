import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft} from "react-icons/bs";

const GenerateCode = ({showModal, setShowModal}) => {
  return (
    <Modal>
      <div className="close__container" onClick={()=>setShowModal(!showModal)}>
        <IoMdClose />
      </div>
      <h3>Code Generated</h3>
      <p>
        {" "}
        A request has been sent to the food organizer, proceed to get your food
        with the unique code below
      </p>
      <p className="blue__code">2342</p>
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
    width: 665px;
    padding: 32px 40px;
    padding-bottom: 52px;
    background: #ffffff;
    border-radius: 20px;

    .close__container {
      text-align: right;
      margin-bottom: 10px;
      svg {
        width: 35px;
        height: 35px;
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
      margin-bottom: 12px;
    }
    .blue__code {
      font-weight: 500;
      font-size: 34px;
      line-height: 51px;
      margin-bottom: 32px;
      color: var(--secondaryColor);
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

export default GenerateCode