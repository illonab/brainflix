import "./Comment.scss";
function Comment() {
  return (
    <article className="comment">
      <div className="comment__avatar avatar"></div>
      <div className="comment__content">
        <div className="comment__top">
          <p className="comment__name">Micheal Lyons</p>
          <time className="comment__date" title="">
            08/09/2021
          </time>
        </div>
        <p className="comment__text">
          They BLEW the ROOF off at their last event, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of an event I have EVER witnessed
        </p>
      </div>
    </article>
  );
}

export default Comment;
