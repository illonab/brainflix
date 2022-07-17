import "./App.scss";
import Header from "./components/Header/Header";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import { API_URL } from "./config";
import axios from "axios";

class App extends Component {
  state = {
    videosData: [],
  };

  getData = async () => {
    const response = await axios.get(`${API_URL}/videos`);
    this.setState({ videosData: response.data });
  };

  async componentDidMount() {
    try {
      this.getData();
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
          <Route
            path="/upload"
            render={(routeProps) => {
              return <Upload getData={this.getData} {...routeProps} />;
            }}
          />
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
          />
        </Switch>
      </>
    );
  }
}

export default App;
