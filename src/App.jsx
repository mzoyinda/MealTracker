import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import General from "./screens/Home/General";
import SignIn from "./screens/Home/SignIn";
import Admin from "./screens/Admin";
import Test from "./screens/Admin/Test";
import AdminHome from "./screens/Admin/Home";
import Employee from "./screens/Employee";
import Vendor from "./screens/Vendor";
import SetPassword from "./screens/Home/SetPassword";
// import { PrivateRoute } from './auth/RequireAuth';
import "./App.css";
// import CreateUser from "./screens/Admin/NewUser";
import Manager from "./screens/Admin/Manager";
import ProtectedRoute from "./auth/RequireAuth";

function App() {
  return (
    <Router>
      <Routes>
        {/* onboarding routes */}
        <Route path="/" element={<Home />}>

        <Route element={<General/>} index/>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="create-password" element={<SetPassword />} />
        </Route>

        <Route element={<ProtectedRoute />} >
      <Route  path="employee" element={<Employee/>}  />
        <Route  path="vendor" element={<Vendor/>}  />
        <Route  path="admin" element={<Admin/>}  >
          <Route element={<AdminHome/>}  index />
         
          <Route element={<Manager/>} path="manage-users"  />
        </Route> 
        </Route>

        {/* protected routes */}
        <Route path="/">
          <Route element={<Home />} path="/user" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
