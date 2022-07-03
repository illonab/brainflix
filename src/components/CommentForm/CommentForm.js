import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";

function CommentForm() {
  return (
    <form className="video-details__commentForm comment-form" action="">
      <Avatar className="comment-form__avatar" />
      <div className="comment-form__controls">
        <label className="comment-form__control">
          Join the conversation
          <textarea
            className="comment-form__comment"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
        </label>
        <input
          className="comment-form__submit cta-btn"
          type="submit"
          name="submit"
          value="Comment"
        />
      </div>
    </form>
  );
}

export default CommentForm;
