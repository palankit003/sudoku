import Navbar from "./componets/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <Navbar />
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
