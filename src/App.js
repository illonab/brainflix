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
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
      this.setState({ videosData: response.data });
    } catch (err) {
      console.log(err);
    }
  }

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
              if (this.state.videosData.length === 0) {
                return null;
              }
              return (
                <Home
                  videos={this.state.videosData}
                  videoId={this.state.videosData[0].id}
                />
              );
            }}
          />
          <Route path="/upload" component={Upload}></Route>
          <Route
            path="/videos/:videoId"
            render={(routeProps) => {
              return (
                <Home
                  videos={this.state.videosData}
                  videoId={routeProps.match.params.videoId}
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
