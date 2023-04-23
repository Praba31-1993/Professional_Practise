import { Route, Routes } from "react-router-dom";
import SignupForm from "./common/SignupForm";
import Loginform from "./common/Loginform";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Loginform/>}/>
      <Route path="/sign" element={<SignupForm/>}/>
      <Route path="/layout" element={<Dashboard/>}/>


      </Routes>

    </div>
  );
}

export default App;
