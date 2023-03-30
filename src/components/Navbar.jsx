import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/brand.png";

const Navbar = () => {
  return (
    <Container>
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
    </Container>
  )
}

const Container = styled.nav`
border-bottom:1px solid #474747 ;
background:var(--primaryColor);
img{
    width: 164px;
    object-fit: cover;
    margin: 20px 27px 11px;
}
`;

export default Navbar