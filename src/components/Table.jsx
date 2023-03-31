import React from "react";
import styled from "styled-components";

const data = [
  {
    "S/N": 1,
    Date: "22-22-32",
    Name: "Oyin Dawodu",
    Designation: "Customer service support",
    "Status": true,
  },
  {
    "S/N": 2,
    Date: "22-22-32",
    Name: "Olaoluwa Sharon",
    Designation: "Talent",
    "Status": false,
  },
  {
    "S/N": 3,
    Date: "22-22-32",
    Name: "Chioma Williams",
    Designation: "Engineering",
    "Status": true,
  },
];

const Table = ({toggleAuth}) => {
   
  const TableMarkup = ({ titles, data }) => (
    <StyledTable>
      <colgroup>
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {titles.map((title, index) => (
              <td key={index}>
                {" "}
                {item[title] === true ? (
                  <p className="eaten">Eaten</p>
                ) : item[title] === false ? (
                    <p className="not__eaten">Not Eaten</p>
                ) : (
                  item[title]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );

  return <TableMarkup titles={Object.keys(data[0])} data={data} />;
};

const StyledTable = styled.table`
  margin-top: 38px;
  border: none;
  padding: 50px;
  border-collapse: collapse;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  th {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #1f6df2;
    margin-bottom: 3px;
  }
  td {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }

  td,
  th {
    border: none;
    text-align: center;
  }
  thead {
    border-bottom: 1.5px solid #c4c4c4;
  }
  th,
  td {
    width: 250px;
    :first-child {
      width: 20px;
    }
    :nth-child(4){
    width: 350px; 
    }
    .eaten{
       color: #31c050a7;
    }
    .not__eaten{
        color: #ff0000a4;
    }
  }
  td {
    padding: 15px 13px;
  }
  th + th,
  td + td {
    padding-left: 42px;
  }

  tbody tr {
    :hover {
      background-color: var(--primaryColor);
    }
  }

  .button__container{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 149px;
    padding: 8px 10px;
  }
`;

export default Table;
