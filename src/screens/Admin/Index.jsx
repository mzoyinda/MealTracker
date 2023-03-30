import { Outlet } from "react-router";
import styled from "styled-components";
import DashboardNav from "../../components/DashboardNav";

const Index = () => {
  return (
    <HomeContainer>
      <DashboardNav />
      <Outlet />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  background: #ffffff;
`;

export default Index;
