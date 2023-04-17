import { Link } from "react-router-dom";
import styles from "../../assets/styles/articleList.module.css";
import style from "../../assets/styles/loading.module.css";

const UserPostsView = ({ userPostsQuery }) => {
  if (userPostsQuery.isLoading || userPostsQuery.isRefetching) {
    return (
      <>
        <div className={style.article__loading}>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      {userPostsQuery.data.map((article) => (
        <Link
          key={article.articleId}
          to={`/article/${article.articleId}`}
          className={styles.articleLink}
        >
          <div className={styles.articleBox}>{article.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default UserPostsView;
