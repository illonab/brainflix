import "./MainVideo.scss";

function MainVideo(props) {
  return (
    <section className="main-video">
      <div className="main-video__wrapper">
        <video
          className="main-video__video"
          controls
          poster={props.video.image}
        ></video>
      </div>
    </section>
  );
}

export default MainVideo;
