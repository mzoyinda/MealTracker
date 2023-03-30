import { Outlet } from "react-router";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import General from "./General";


const Index = () => {
  return (
      <HomeContainer>
       <Navbar/>
       <Outlet/>
      </HomeContainer>
  );
};

const HomeContainer = styled.main`
  background:var(--primaryColor);
`;

export default Index;
