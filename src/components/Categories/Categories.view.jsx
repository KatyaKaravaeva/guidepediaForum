import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import style from "../../assets/styles/loading.module.css";

const CategoriesView = ({ categoriesQuery }) => {
  console.log(categoriesQuery);
  if (categoriesQuery.isLoading || categoriesQuery.isRefetching) {
    return (
      <div className={style.article__loading}>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div className="container">
      {categoriesQuery.data.map((category) => (
        <Link
          key={category.id}
          to={`/categories/${category.id}`}
          className={styles.categoryLink}
        >
          <div className={styles.categoryBox}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesView;
