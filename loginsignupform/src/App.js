import { Route, Routes } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Loginform from "./components/Loginform";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Loginform/>}/>
      <Route path="/login" element={<Loginform/>}/>


        <Route path="/signup" element={<SignupForm />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
