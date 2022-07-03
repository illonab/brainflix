import "./Video.scss";

function Video(props) {
  const clickHandler = () => {
    props.changeActiveVideo(props.video.id);
  };

  return (
    <article className="video" onClick={clickHandler}>
      <img className="video__image" src={props.video.image} alt="" />
      <div className="video__content">
        <h3 className="video__title">{props.video.title}</h3>
        <p className="video__author">{props.video.author}</p>
      </div>
    </article>
  );
}

export default Video;
