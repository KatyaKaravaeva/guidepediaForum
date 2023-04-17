import { Link } from "react-router-dom";
import styles from "./Categories.module.css";
import style from "../../assets/styles/loading.module.css";

const CategoriesView = ({ categoriesQuery }) => {
  // const categories = [
  //   { id: 1, name: "Category 1" },
  //   { id: 2, name: "Category 2" },
  //   { id: 3, name: "Category 3" },
  //   { id: 4, name: "Category 4" },
  // ];
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
          key={category.categoryId}
          to={`/categories/${category.categoryId}`}
          className={styles.categoryLink}
        >
          <div className={styles.categoryBox}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesView;
