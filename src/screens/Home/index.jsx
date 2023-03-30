import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "../../components/Navbar";


const Index = () => {
  return (
      <HomeContainer>
       <Navbar/>
       <Outlet/>
      </HomeContainer>
  );
};

const HomeContainer = styled.main`
  height: 100vh;
  background:var(--primaryColor);
`;

export default Index;
