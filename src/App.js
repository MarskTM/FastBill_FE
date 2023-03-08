import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "./views/authen/SignIn";
import SingUpScreen from "./views/authen/SignUp";
import Home from "./views/administer/Home";
import Payments from "./views/administer/Payments";
import Profile from "./views/profile/Profile";
import Banking from "./views/administer/Banking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/signup" element={<SingUpScreen />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/payment" element={<Payments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bank" element={<Banking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
