import style from "./Comments.module.css";

const CommentsListView = ({ comments, createComment, newCommentRef }) => {
  return (
    <div className={style.container}>
      <div className={style.comments_list__get_comments}>
        {comments.map((comment) => (
          <div className={style.comment}>
            <span className={style.comments__span}>
              {comment.users.username}
            </span>
            <span className={style.comments__span_comment}>
              {comment.comment}
            </span>
          </div>
        ))}
      </div>
      <div className={style.comments_list__create_comment}>
        <textarea
          className={style.comments__textarea}
          ref={newCommentRef}
        ></textarea>
        <button
          className={style.comment__button}
          onClick={(e) => createComment(e)}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default CommentsListView;
