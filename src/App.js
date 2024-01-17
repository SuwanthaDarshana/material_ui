import Drawertemp from "./components/Drawertemp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/drawer" element={<Drawertemp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
