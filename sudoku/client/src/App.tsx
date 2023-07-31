import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Game from "./pages/Game/Game";
// import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Game />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
