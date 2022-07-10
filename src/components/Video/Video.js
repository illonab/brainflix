import "./Video.scss";
import { Link } from "react-router-dom";

function Video(props) {
  return (
    <Link to={`/videos/${props.video.id}`}>
      <article className="video">
        <img
          className="video__image"
          src={props.video.image}
          alt="main video"
        />
        <div className="video__content">
          <h3 className="video__title">{props.video.title}</h3>
          <p className="video__author">{props.video.channel}</p>
        </div>
      </article>
    </Link>
  );
}

export default Video;
