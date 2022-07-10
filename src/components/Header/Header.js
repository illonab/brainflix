import logoImage from "../../assets/logo/brainflix-logo.svg";
import "./Header.scss";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to={"/"} className="header__logo">
          <img src={logoImage} alt="Brainflix logo" className="header__image" />
        </Link>
        <div className="header__container">
          <input
            className="header__search"
            type="text"
            name="search"
            placeholder="Search"
          />
          <Avatar className="header__avatar header__avatar--mobile" />
        </div>
        <Link to={"/upload"}>
          <input
            className="header__upload cta-btn"
            type="submit"
            name="submit"
            value="Upload"
          />
        </Link>
        <Avatar className="header__avatar header__avatar--tablet" />
      </div>
    </div>
  );
}

export default Header;
