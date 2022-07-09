import "./App.scss";
import Header from "./components/Header/Header";

import videoDetailsData from "./data/video-details.json";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import { API_KEY, API_URL } from "./config";
import axios from "axios";

class App extends Component {
  state = {
    videosData: [],
    mainVideo: videoDetailsData[0],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
      this.setState({ videosData: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  changeActiveVideo = (id) => {
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
        <Switch>
          <Redirect from="/home" to="/" />
          <Route
            path="/"
            exact
            render={() => {
              return (
                <Home
                  state={this.state}
                  changeActiveVideo={this.changeActiveVideo}
                />
              );
            }}
          />
          <Route path="/upload" component={Upload}></Route>
          <Route
            path="/videos/:videoId"
            render={(routProps) => {
              console.log(routProps.match.params.videoId);
              return (
                <Home
                  state={this.state}
                  changeActiveVideo={this.changeActiveVideo}
                />
              );
            }}
          ></Route>
        </Switch>
      </>
    );
  }
}

export default App;
