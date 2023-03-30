import React from "react";
import { BiCalendar } from 'react-icons/bi';
import styled from "styled-components";

const Table = () => {
  return (
    <Container>
      <div className="input__container">
        <form className="box">
          <input
            type="text"
            placeholder="search by employee name, designation or date"
          />
          <button to="/vendor">
            <BiCalendar/>
          </button>
        </form>
        </div>
        <div className="sort">
            <p>Sort by:</p>
            <select name="status" id="status">
                <option value="eaten">Eaten</option>
                <option value="not eaaten">Not Eaten</option>
            </select>
        </div>
    </Container>
  );
};

const Container = styled.section`
display: flex;
justify-content: center;
gap: 30px;
align-items: center;
.input__container {
    display: flex;
    justify-content: center;
    align-self: flex-end;
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
        color: #9B9A9A;
        font-weight: 200;
        font-size: 18px;
        line-height: 27px;
      }
      svg {
        margin-left: 12px;
        width: 30px;
        height: 30px;
       color: #1F6DF2;

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

  .sort{
    p{
        font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #222222;
    }
    select{
        display: flex;
flex-direction: row;
align-items: center;
padding: 0px 18px;
gap: 39px;
width: 140px;
height: 51px;
border: 1px solid #6A6666;
border-radius: 10px;
    }
  }
`;

export default Table;
