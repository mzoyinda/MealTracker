import React from 'react'
import styled from 'styled-components'

const Cards = () => {
  return (
    <CardContainer>
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
    </CardContainer>
  )
}

const CardContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
gap: 46px;
color: #FCFCFC;

.card{
    display: flex;
flex-direction: column;
align-items: center;
padding: 40px 50px;
gap: 21px;
width: 340px;
/* height: 182px; */
background: #2A42BC;
border-radius: 20px;
}

.card2{
    background: #0093B3;
}
.card3{
    background: #9747FF;
}
`
export default Cards