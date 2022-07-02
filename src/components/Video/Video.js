import "./Video.scss";
function Video() {
  return (
    <article className="video">
      <img
        className="video__image"
        src="https://i.imgur.com/5qyCZrD.jpg"
        alt=""
      />
      <div className="video__content">
        <h3 className="video__title">Become A Travel Pro In One Easy Lesson</h3>
        <p className="video__author">Todd Welch</p>
      </div>
    </article>
  );
}

export default Video;
