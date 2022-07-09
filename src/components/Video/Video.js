import "./Video.scss";
import { Link } from "react-router-dom";

function Video(props) {
  const clickHandler = () => {
    props.changeActiveVideo(props.video.id);
  };

  return (
    <article className="video" onClick={clickHandler}>
      <img className="video__image" src={props.video.image} alt="main video" />
      <div className="video__content">
        <h3 className="video__title">{props.video.title}</h3>
        <p className="video__author">{props.video.channel}</p>
      </div>
    </article>
  );
}

export default Video;
