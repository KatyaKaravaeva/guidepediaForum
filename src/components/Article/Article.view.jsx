import styles from "./Article.module.css";
import UserLogo from "../../assets/images/user_logo.svg";
import BlackLike from "../../assets/images/heart.png";
import RedLike from "../../assets/images/heart_red.png";
import { COMMENTS } from "../../navigation/routes";
import CommentsList from "./CommentsList";

const ArticleView = ({
  commentsQuery,
  commentsShow,
  setCommentsShow,
  articleQuery,
  isLike,
  changeLike,
  likesQuery,
  isBookMark,
  setBookMark,
  makeBookmark,
  isSubscribe,
  subscribeToUser,
  changeSubscribe,
}) => {
  if (articleQuery.isLoading || articleQuery.isRefetching) {
    return (
      <>
        <div className={styles.article__loading}>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        <div className={styles.user_profile}>
          <div className={styles.user_header}>
            <div className={styles.avatar_wrapper}>
              <img src={UserLogo} alt="user_avatar" className={styles.avatar} />
            </div>
            <div className={styles.user_info}>
              <h3 className={styles.user_name}>
                {articleQuery.data.users.username}
              </h3>
              <button
                className={styles.subscribe_btn}
                onClick={() => changeSubscribe()}
              >
                {isSubscribe ? "Отписаться" : "Подписаться"}
              </button>
            </div>
          </div>
          <div className={styles.article_wrapper}>
            <div className={styles.article}>
              <h2 className={styles.article_title}>
                {articleQuery.data.title}
              </h2>
              <p className={styles.article_content}>{articleQuery.data.text}</p>
            </div>
            <div className={styles.actions}>
              <button
                className={styles.comment_btn}
                onClick={() => setCommentsShow((prev) => !prev)}
              >
                {commentsShow ? "Закрыть комментарии" : "Открыть комментарии"}
              </button>
              <button
                className={styles.bookmark_btn}
                onClick={() => makeBookmark()}
              >
                {isBookMark ? "Убрать из закладок" : "Добавить в закладки"}
              </button>
              <div className={styles.bookmark__like}>
                <div className={styles.heart}>
                  <button
                    className={styles.heart_btn}
                    onClick={() => changeLike()}
                  >
                    <img
                      className={styles.heart}
                      src={isLike ? RedLike : BlackLike}
                    />
                  </button>
                  {/* <span className={styles.heart_count}>{}</span> */}
                  <span className={styles.heart_count__span}>
                    {likesQuery.data + (isLike ? 1 : 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {commentsShow ? (
          <>
            {articleQuery.isLoading ||
            articleQuery.isRefetching ||
            !commentsShow ? (
              <>
                <div className={styles.article__loading}>
                  <h1>loading...</h1>
                </div>
              </>
            ) : (
              <CommentsList comments={commentsQuery.data} />
            )}
          </>
        ) : null}
      </div>
    </>
  );
};

export default ArticleView;
