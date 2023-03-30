import React from 'react'
import styled from 'styled-components';
import Cards from './Cards';
import Header from './Header';
import Table from './Table';

const Manager = () => {
  return (
    <HomeContainer>
        <Header/>
        <Table/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`

`;

export default Manager