import styles from "./Bookmarks.module.css";
import { Link } from "react-router-dom";

const BookmarksView = ({ bookMarksQuery }) => {
  if (bookMarksQuery.isLoading || bookMarksQuery.isRefetching) {
    return (
      <>
        <div className={styles.article__loading}>
          <h1>loading...</h1>
        </div>
      </>
    );
  }
  return (
    <div className="container">
      {bookMarksQuery.data.map((article) => (
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

export default BookmarksView;
