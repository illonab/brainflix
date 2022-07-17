import "./VideoList.scss";
import Video from "../Video/Video";

function VideoList(props) {
  return (
    <section className="video-list">
      <h2 className="video-list__title">Next video</h2>
      {props.list
        .filter((video) => video.id !== props.mainVideo.id)
        .map((video) => (
          <Video key={video.id} video={video} />
        ))}
    </section>
  );
}

export default VideoList;
