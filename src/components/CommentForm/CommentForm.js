import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import axios from "axios";
import { API_KEY, API_URL } from "../../config";

function CommentForm(props) {
  const submitHandler = (e) => {
    e.preventDefault();

    const newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
    };

    axios({
      header: {
        "Content-Type": "application/json",
      },
      method: "POST",
      url: `${API_URL}/videos/${props.videoId}/comments?api_key=${API_KEY}`,
      data: newComment,
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        }
        props.fetchMainVideo(true);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <section className="conversation">
      <h2 className="conversation__subtitle">Join the Conversation</h2>
      <form
        className="conversation__commentForm comment-form"
        action=""
        onSubmit={submitHandler}
      >
        <Avatar className="comment-form__avatar" />
        <div className="comment-form__controls">
          <label className="comment-form__control">
            Name
            <input
              type="text"
              className="comment-form__input"
              placeholder="Enter your name"
              name="name"
            />
          </label>
          <label className="comment-form__control comment-form__control--area">
            Comment
            <textarea
              className="comment-form__input comment-form__input--area"
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
    </section>
  );
}

export default CommentForm;
