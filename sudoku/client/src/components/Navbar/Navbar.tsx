import { useTheme } from "../../utils/ThemeContext";
import Style from "./Navbar.module.css";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <div className={Style.container} data-theme={theme}>
        <div className={Style.logo}>Sudoku</div>
        <div className={Style.linkContainer}>
          <ul>
            <li onClick={() => toggleTheme("candy-land")}>Candy Land</li>
            <li onClick={() => toggleTheme("space-theme")}>Space Theme</li>
            <li onClick={() => toggleTheme("nature-theme")}>Nature Theme</li>
            <li onClick={() => toggleTheme("ocean-theme")}>Ocean Theme</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
