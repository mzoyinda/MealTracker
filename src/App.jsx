import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Index";
import General from "./screens/Home/General";
import SignIn from "./screens/Home/SignIn";
import Admin from "./screens/Admin";
import AdminHome from "./screens/Admin/Home";
import Employee from "./screens/Employee/Index";
import Vendor from "./screens/Vendor/Index";
import SetPassword from "./screens/Home/SetPassword";
// import { PrivateRoute } from './auth/RequireAuth';
import "./App.css";

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

        <Route  path="employee" element={<Employee/>}  />
        <Route  path="vendor" element={<Vendor/>}  />
        <Route  path="admin" element={<Admin/>}  >
          <Route element={<AdminHome/>}  index />
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
