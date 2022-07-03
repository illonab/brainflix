import "./Comment.scss";
import { formatDateString } from "../../utils";

function Comment(props) {
  return (
    <article className="comment">
      <div className="comment__avatar avatar"></div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__name">{props.comment.name}</p>
          <time className="comment__date" title="">
            {formatDateString(props.comment.timestamp)}
          </time>
        </div>
        <p className="comment__text">{props.comment.comment}</p>
      </div>
    </article>
  );
}

export default Comment;
