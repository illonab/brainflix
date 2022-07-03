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
            {formatDate(props.comment.timestamp)}
          </time>
        </div>
        <p className="comment__text">{props.comment.comment}</p>
      </div>
    </article>
  );
}

export default Comment;
