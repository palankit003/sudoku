import { useTheme } from "../../utils/ThemeContext";
import Style from "./Navbar.module.css";
import avatar from "../../assets/avatars/avatarSquare.png";
import { useState } from "react";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  console.log(theme);
  return (
    <>
      <div className={Style.container} data-theme={theme}>
        <div className={Style.logo}>Sudoku</div>
        <div
          className={Style.avatarContainer}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <img src={avatar} alt="avatar" className={Style.avatar} />
        </div>
        {openMobileMenu && (
          <div className={Style.mobileMenuContainer}>
            <div
              className={Style.crossButton}
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <div className={Style.leftCross}>
                <div className={Style.rightCross}></div>
              </div>
            </div>
            <div className={Style.userBackground}>
              <div className={Style.mobileAvatarContainer}>
                <img src={avatar} alt="Avatar" className={Style.mobileAvatar} />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 800 800"
                className={Style.svgbackground}
              >
                <defs>
                  <pattern
                    id="mmmotif-pattern"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    patternTransform="translate(0 0) scale(1) rotate(45) skewX(0) skewY(0)"
                  >
                    <rect
                      width="18"
                      height="18"
                      transform="matrix(0.866025 0.5 -0.866025 0.5 20 2)"
                      fill="hsl(212, 91%, 55%)"
                    ></rect>
                    <rect
                      width="18"
                      height="18"
                      transform="matrix(0.866025 0.5 -2.20305e-08 1 4.41162 11)"
                      fill="#70b4ff"
                    ></rect>
                    <rect
                      width="18"
                      height="18"
                      transform="matrix(0.866025 -0.5 2.20305e-08 1 20 20)"
                      fill="#0059c1"
                    ></rect>
                  </pattern>
                </defs>
                <rect
                  width="800"
                  height="800"
                  fill="url(#mmmotif-pattern)"
                ></rect>
              </svg>
            </div>
            <div>
              Themes
              <div className={Style.linkContainer}>
                <ul>
                  <li onClick={() => toggleTheme("candy-land")}>Candy Land</li>
                  <li onClick={() => toggleTheme("space-theme")}>
                    Space Theme
                  </li>
                  <li onClick={() => toggleTheme("nature-theme")}>
                    Nature Theme
                  </li>
                  <li onClick={() => toggleTheme("ocean-theme")}>
                    Ocean Theme
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
