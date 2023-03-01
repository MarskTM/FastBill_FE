import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInScreen from "./views/authen/SignIn";
import SingUpScreen from "./views/authen/SignUp";
import Home from "./views/administer/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInScreen />} />
          <Route path="/signup" element={<SingUpScreen />}></Route>
          <Route path="/admin" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
