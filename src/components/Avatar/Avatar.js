import "./Avatar.scss";
import userImage from "../../assets/images/mohan-muruge.jpg";

function Avatar(props) {
  return (
    <img
      src={userImage}
      alt="Brainflix logo"
      className={"avatar " + props.className}
    />
  );
}

export default Avatar;
