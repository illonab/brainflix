import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";

import "./VideoDetails.scss";

function VideoDetails(props) {
  return (
    <section className="video-details">
      <div className="video-details__wrapper">
        <h1 className="video-details__title">{props.details.title}</h1>
        <div className="video-details__undeline">
          <div className="video-details__info">
            <div className="video-details__left">
              <p className="video-details__author">{props.details.channel}</p>
              <time className="video-details__date">
                {props.details.timestamp}
              </time>
            </div>
            <div className="video-details__right">
              <p className="video-details__views">{props.details.views}</p>
              <p className="video-details__likes">{props.details.likes}</p>
            </div>
          </div>
        </div>
        <p className="video-details__description">
          {props.details.description}
        </p>
        <p className="video-details__comments">
          {props.details.comments.length} Comments
        </p>
        <CommentForm />
        <CommentsList list={props.details.comments} />
      </div>
    </section>
  );
}

export default VideoDetails;
