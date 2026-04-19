// code readability improvements and formatting
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Customer/Home";
import Profile from "./Components/Customer/Profile";
import { LoginForm } from "./Components/Login/LoginForm";
import { SignupForm } from "./Components/Login/SignupForm";
import Dashbord from "./Components/Owner Dashbord/Dashbord";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
