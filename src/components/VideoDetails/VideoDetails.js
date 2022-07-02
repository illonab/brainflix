import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";
import VideoList from "../VideoList/VideoList";

import "./VideoDetails.scss";

function VideoDetails() {
  return (
    <section className="video-details">
      <div className="video-details__wrapper">
        <h1 className="video-details__title">BMX Rampage: 2021 Highlights</h1>
        <div className="video-details__undeline">
          <div className="video-details__info">
            <div className="video-details__left">
              <p className="video-details__author">By Red Crow</p>
              <time className="video-details__date">07/11/2021</time>
            </div>
            <div className="video-details__right">
              <p className="video-details__views">1,001,023</p>
              <p className="video-details__likes">110,985</p>
            </div>
          </div>
        </div>
        <p className="video-details__description">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
        <p className="video-details__comments">3 Comments</p>
        <CommentForm />
        <CommentsList />
      </div>
    </section>
  );
}

export default VideoDetails;
