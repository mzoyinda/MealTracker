import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import styled from "styled-components";
import DashboardNav from "../../components/DashboardNav";

const Index = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { loading, error, userInfo } = user;

  useEffect(() => {
    if (userInfo) {
      const activeUser = userInfo.user.user_type;
      console.log(userInfo, activeUser)
    if (userInfo) {
      const activeUser = userInfo.user.user_type;
      console.log(userInfo, activeUser);
    }else if (activeUser !== "admin") {
        navigate("/sign-in");
      }
    }
  },[userInfo, location.state, error, navigate]);


  
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
