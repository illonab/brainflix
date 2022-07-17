import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetail from "../../components/VideoDetails/VideoDetails";
import VideoList from "../../components/VideoList/VideoList";
import React, { Component } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "../../config";

class Home extends Component {
  state = {
    mainVideo: null,
  };

  fetchMainVideo = async (force = false) => {
    if (
      this.state.mainVideo === null ||
      this.state.mainVideo.id !== this.props.videoId ||
      force
    ) {
      try {
        const response = await axios.get(
          `${API_URL}/videos/${this.props.videoId}?api_key=${API_KEY}`
        );
        this.setState({ mainVideo: response.data });
      } catch (err) {
        console.log(err);
      }
    }
  };
  async componentDidUpdate() {
    this.fetchMainVideo();
  }

  async componentDidMount() {
    this.fetchMainVideo();
  }

  render() {
    if (this.state.mainVideo === null) {
      return null;
    }
    return (
      <main className="main">
        <MainVideo video={this.state.mainVideo} />
        <div className="main__wrapper">
          <VideoDetail
            details={this.state.mainVideo}
            fetchMainVideo={this.fetchMainVideo}
          />
          <VideoList
            list={this.props.videos}
            mainVideo={this.state.mainVideo}
          />
        </div>
      </main>
    );
  }
}

export default Home;
