import Style from "./NavLink.module.css";
import { Link } from "react-router-dom";
interface NavLinkProps {
  link: string;
}
const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  return (
    <Link to={link == "Home" ? "" : `${link}`} className={Style.link}>
      <div className={Style.container}>
        <div className={Style.main}>{link}</div>
        <div className={Style.line}></div>
      </div>
    </Link>
  );
};
export default NavLink;
