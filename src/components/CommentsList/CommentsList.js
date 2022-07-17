import "./CommentsList.scss";
import Comment from "../Comment/Comment";

function CommentsList(props) {
  console.log(props.list);
  const sortedList = [...props.list];
  sortedList.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return (
    <div className="video-details__commentsList comments-list">
      {sortedList.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}

export default CommentsList;
