import "./MainVideo.scss";

function MainVideo() {
  return (
    <section className="main-video">
      <div className="main-video__wrapper">
        <video
          className="main-video__video"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
        ></video>
      </div>
    </section>
  );
}

export default MainVideo;
