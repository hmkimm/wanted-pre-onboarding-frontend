import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/todo" />
        hello world
      </Routes>
    </>
  );
};
export default App;
