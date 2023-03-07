import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "./views/authen/SignIn";
import SingUpScreen from "./views/authen/SignUp";
import Home from "./views/administer/Home";
import Payments from "./views/administer/Payments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/signup" element={<SingUpScreen />} />
          <Route path="/admin" element={<Home />} />
          <Route path="/payment" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
