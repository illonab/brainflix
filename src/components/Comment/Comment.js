import "./Comment.scss";
function Comment() {
  return (
    <article className="comment">
      <div class="comment__avatar avatar"></div>
      <div class="comment__content">
        <div class="comment__top">
          <p class="comment__name">Micheal Lyons</p>
          <time class="comment__date" title="">
            08/09/2021
          </time>
        </div>
        <p class="comment__text">
          They BLEW the ROOF off at their last event, once everyone started
          figuring out they were going. This is still simply the greatest
          opening of an event I have EVER witnessed
        </p>
      </div>
    </article>
  );
}

export default Comment;
