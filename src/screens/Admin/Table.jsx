import React from "react";
import { BiCalendar } from "react-icons/bi";
import styled from "styled-components";
import Table from "../../components/Table";

const TableSorting = () => {
  return (
    <Container>
      <div className="top__section">
        <div className="input__container">
          <form className="box">
            <input
              type="text"
              placeholder="search by employee name, designation or date"
            />
            <button to="/vendor">
              <BiCalendar />
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
      </div>
      <Table />
    </Container>
  );
};

const Container = styled.section`
  .top__section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 87px;
    height: 100px;

    .input__container {
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: flex-end;

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
          ::placeholder{
              color: #9b9a9a;
              font-weight: 200;
              font-size: 18px;
              line-height: 27px;

          }
        }
        svg {
          margin-left: 12px;
          width: 30px;
          height: 30px;
          color: #1f6df2;

          :hover {
            cursor: pointer;
          }
        }
        button {
          width: 40px;
          background: transparent;
          color: #111111;
          padding: 0;
          border: none;
        }
      }
    }

    .sort {
      align-self: baseline;
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: #222222;
      }
      select {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 18px;
        box-sizing: content-box;
        
        gap: 39px;
        width: 140px;
        height: 51px;
        border: 1px solid #6a6666;
        border-radius: 10px;
      }
    }
  }
`;

export default TableSorting;
