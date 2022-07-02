import "./App.scss";
import Header from "./components/Header/Header";
import MainVideo from "./components/MainVideo/MainVideo";
import VideoDetail from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <MainVideo />
        <div className="main__wrapper">
          <VideoDetail></VideoDetail>
          <VideoList />
        </div>
      </main>
    </>
  );
}

export default App;
