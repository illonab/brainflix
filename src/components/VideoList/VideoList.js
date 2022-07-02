import "./VideoList.scss";
import Video from "../Video/Video";

function VideoList() {
  return (
    <section className="video-list">
      <h2 className="video-list__title">Next video</h2>
      <Video />
    </section>
  );
}

export default VideoList;
