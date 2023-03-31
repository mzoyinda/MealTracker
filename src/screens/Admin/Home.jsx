import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Table from './Table';

const Home = () => {
  return (
    <HomeContainer>
        <Header/>
        <Table/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`

`;

export default Home