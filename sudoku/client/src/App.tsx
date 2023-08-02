import Style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Game from "./pages/Game/Game";
import { useTheme } from "./utils/ThemeContext";
// import Home from "./pages/Home/Home";

function App() {
  const theme = useTheme().theme;
  return (
    <>
      <div className={Style.container} data-theme={theme}>
        <nav>
          <Navbar />
        </nav>
        <main className={Style.main}>
          <Game />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
