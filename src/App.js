import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Machine from "./pages/Machine";
import Hack from "./pages/Hack";
import Esp from "./pages/Esp";
import Cod from "./pages/Cod";
import Credit from './pages/credits'
import "./styles.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/machine" element={<Machine />} />
          <Route path="/hack" element={<Hack />} />
          <Route path="/esp" element={<Esp />} />
          <Route path="/cod" element={<Cod />} />
          <Route path="/credits" element={<Credit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
