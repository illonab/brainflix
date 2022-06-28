import logoImage from "../../assets/logo/brainflix-logo.svg";
import userImage from "../../assets/images/mohan-muruge.jpg";
import Form from "../Form/Form";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logoImage} alt="Brainflix logo" className="header__image" />
        </div>
        <Form />
        <div className="header__user">
          <img
            src={userImage}
            alt="Brainflix logo"
            className="header__avatar"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
