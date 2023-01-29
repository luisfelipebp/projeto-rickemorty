import "./App.css";
import Home from "./Home";
import Pokemon from "./Personagem";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="personagem/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
