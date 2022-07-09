import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetail from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";

function Home(props) {
  console.log(props.state);
  return (
    <main className="main">
      <MainVideo video={props.state.mainVideo} />
      <div className="main__wrapper">
        <VideoDetail details={props.state.mainVideo} />
        <VideoList
          list={props.state.videosData}
          mainVideo={props.state.mainVideo}
          changeActiveVideo={props.state.changeActiveVideo}
        />
      </div>
    </main>
  );
}

export default Home;
