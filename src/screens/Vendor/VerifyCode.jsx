import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import mark from "../../assets/mark.svg";
import CustomModal from "../../components/Modal";

const VerifyCode = ({ toggleAuth }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("default");

  // generate code
  const generateCode= () => {
    setLoading(true);
    setStatus("generated");
    console.log(status)

    // after fail set status to default to return form
  };

  // handle code verification
  const verifyCode= () => {
    setLoading(true);
    
    //tokeen time out(toast) -- back to generate code
    //out
    setStatus("verified");
    console.log(status)
    // failure
  };

  return (
    <>
      {status === "verified" ? (
        <CustomModal
          title="Verification Successful!"
          details="The one-time code for this employee is correct, proceed to serve as requested."
          button="Back to Home"
          type="success"
          buttonIcon="true"
          toggleAuth={toggleAuth}
        />
      ) : status === "fail" ? (
        <CustomModal
          title="Verification Failed !"
          details="The one-time code entered for this employee is in-correct, please re-check and try again."
          button="Re-enter Code"
          type="fail"
          buttonIcon="false"
          toggleAuth={toggleAuth}
        />
      ) : status === "generated" ? (
        <Modal>
          <div className="close__container" onClick={toggleAuth}>
            <IoMdClose />
          </div>
          <h3>Verify Token</h3>
       
          <p>Please enter the four-digit unique code for this employee below</p>
       
            <input type="text" placeholder="Enter Generated Token" />
            <div className="button__container">
              <button>
                <span onClick={verifyCode}>Submit</span>
              </button>
            </div>
        </Modal>
      ) : (
        <Modal>
          <div className="close__container" onClick={toggleAuth}>
            <IoMdClose />
          </div>
          <h3>Generate Code</h3>
       
          <p>Please enter the four-digit unique code for this employee below</p>

    
            <input type="text" placeholder="Enter Employee ID" />
            <div className="button__container">
              <button>
                <span onClick={generateCode}>Submit</span>
              </button>
            </div>
        </Modal>
      )}
    </>
  );
};

const Modal = styled.section`
  position: absolute;
  top: 25%;
  left: 35%;
  z-index: 10;
  width: 680px;
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

  input {
    padding: 15px 20px;
    width: 580px;
    height: 70px;
    font-weight: 400;
    font-size: 19px;
    line-height: 28px;
    border: 1.5px solid #1f6df2;
    border-radius: 10px;
  }

  input + input {
    margin-top: 30px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    align-items: center;
    padding: 10px 25px;
    gap: 23px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    width: 600px;
    height: 62px;
    color: #fcfcfc;
    background: #1f6df2;
    border-radius: 10px;
  }
  .button__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default VerifyCode;
