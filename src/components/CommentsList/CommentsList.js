import "./CommentsList.scss";
import Comment from "../Comment/Comment";

function CommentsList(props) {
  return (
    <div className="video-details__commentsList comments-list">
      {props.list.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
export default CommentsList;
