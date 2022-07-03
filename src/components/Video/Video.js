import "./Video.scss";
function Video(props) {
  return (
    <article className="video">
      <img className="video__image" src={props.video.image} alt="" />
      <div className="video__content">
        <h3 className="video__title">{props.video.title}</h3>
        <p className="video__author">{props.video.author}</p>
      </div>
    </article>
  );
}

export default Video;
