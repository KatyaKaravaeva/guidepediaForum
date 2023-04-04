import { Link } from "react-router-dom";
import styles from "../../assets/styles/articleList.module.css";
import style from "./MainPage.module.css";
import CommentsIcon from "../../assets/images/comments_icon.svg";
import BookMarkIcon from "../../assets/images/bookmarks_img.svg";

const MainPageView = ({
  handleSubmit,
  articles,
  mainPageQuery,
  mainPageSubscribeQuery,
  isSubscribe,
  setIsSubscribe,
}) => {
  if (mainPageQuery.isLoading || mainPageQuery.isRefetching) {
    return (
      <>
        <div className={styles.article__loading}>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
 // console.log(articles);
  return (
    <div className="container">
      <div className={style.change_articles_button}>
        <button
          className={style.subscribe_articles_button}
          onClick={(e) => {
            setIsSubscribe((prev) => !prev);
            handleSubmit(e);
          }}
        >
          {!isSubscribe ? "Все статьи" : "Подписки"}
        </button>
      </div>

      {articles.map((article) => (
        <Link
          key={article.articleId}
          to={`/article/${article.articleId}`}
          className={styles.articleLink}
        >
          <div className={styles.articleBox}>
            <div>{article.title}</div>
            <div
              className={style.articleBoxButtons}
              onClick={(e) => e.preventDefault()}
            >
              <Link
                className={style.articleButton}
                to={`/article/${article.articleId}?comments=true`}
              >
                <img className={style.commentIcon} src={CommentsIcon} />
              </Link>
              <button
                className={style.articleButton}
                onClick={(e) => e.preventDefault()}
              >
                <img className={style.bookmarkIcon} src={BookMarkIcon} />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainPageView;
