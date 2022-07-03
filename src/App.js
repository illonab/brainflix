import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetail from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";
import videosData from "./assets/data/videos.json";
import videoDetailsData from "./assets/data/video-details.json";
import React, { Component } from "react";

class App extends Component {
  state = {
    videosData,
    videoDetailsData,
    mainVideo: videoDetailsData[0],
  };

  changeActiveVideo = (id) => {
    console.log("CHANE ACTIVE VIDEO HAD BEEN CALLED");
    this.setState({
      mainVideo: this.state.videoDetailsData.find((video) => {
        return video.id === id;
      }),
    });
  };

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <MainVideo video={this.state.mainVideo} />
          <div className="main__wrapper">
            <VideoDetail details={this.state.mainVideo} />
            <VideoList
              list={this.state.videosData}
              mainVideo={this.state.mainVideo}
              changeActiveVideo={this.changeActiveVideo}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
