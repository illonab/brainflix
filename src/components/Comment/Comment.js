import "./Comment.scss";
import { formatDate } from "../../utils";

function Comment(props) {
  return (
    <article className="comment">
      <div className="comment__avatar avatar"></div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__name">{props.comment.name}</p>
          <time className="comment__date" title="">
            {/* Please see the utils.js. I use react-timeago library for date formating. Accordingly to the logic the date formating chabges to human-readeable format after 1 month */}
            {formatDate(props.comment.timestamp)}
          </time>
        </div>
        <p className="comment__text">{props.comment.comment}</p>
      </div>
    </article>
  );
}

export default Comment;
