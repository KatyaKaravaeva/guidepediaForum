import { Link } from "react-router-dom";
import articleStyle from "../../assets/styles/articleList.module.css";
import style from "../../assets/styles/loading.module.css";

const CategoryArticlesView = ({ categoryArticlesQuery }) => {
  if (categoryArticlesQuery.isLoading || categoryArticlesQuery.isRefetching) {
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
      {categoryArticlesQuery.data.map((article) => (
        <Link
          key={article.articleId}
          to={`/article/${article.articleId}`}
          className={articleStyle.articleLink}
        >
          <div className={articleStyle.articleBox}>{article.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryArticlesView;
