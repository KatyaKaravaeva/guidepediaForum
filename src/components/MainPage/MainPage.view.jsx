import { Link } from "react-router-dom";
import styles from "../../assets/styles/articleList.module.css";
import style from "./MainPage.module.css";
import CommentsIcon from "../../assets/images/comments_icon.svg";
import BookMarkIcon from "../../assets/images/bookmarks_img.svg";
import BookMarkAdd from "../../assets/images/bookmark_add.svg";
import BookMarkAdded from "../../assets/images/bookmark_added.svg";
import { ROOT } from "../../navigation/routes";
import styleLoading from "../../assets/styles/loading.module.css";

const MainPageView = ({
  handleSubmit,
  articles,
  mainPageQuery,
  mainPageSubscribeQuery,
  isSubscribe,
  setIsSubscribe,
  makeBookmark,
  queryLine,
  searchData,
}) => {
  if (mainPageQuery.isLoading || mainPageQuery.isRefetching) {
    return (
      <>
        <div className={styleLoading.article__loading}>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      {!isSubscribe ? (
        <form className={styles.header__search} onSubmit={(e) => searchData(e)}>
          <button className={styles.header__search_icon} type="submit"></button>
          <input
            className={styles.header__search_field}
            name="search"
            type="text"
            placeholder="search"
          />
        </form>
      ) : (
        ""
      )}
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

      {articles.map((article, index) => (
        <Link
          key={index}
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
                onClick={(e) => {
                  e.preventDefault();
                  makeBookmark(article);
                }}
              >
                <img
                  className={style.bookmarkIcon}
                  src={article.statusSave ? BookMarkAdded : BookMarkAdd}
                />
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainPageView;
