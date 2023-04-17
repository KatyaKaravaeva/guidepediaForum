import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styles from "./CreateArticle.module.css";
import "../../assets/styles/reactQuill.css";

const CreateArticleView = ({
  categoriesQuery,
  textEditor,
  setTextEditor,
  handleSubmit,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className={styles.create_article__container}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.create_article_category}>
          {categoriesQuery.isLoading || categoriesQuery.isRefetching ? (
            <div className={styles.create_article__loading}>
              <h1>loading...</h1>
            </div>
          ) : (
            <div>
              <h1 className={styles.create_article__title}>Новая статья</h1>
              <label className={styles.categories__label}>Категории</label>
              <select
                name="article[categories]"
                id="create_article__select"
                className={styles.categories__select}
              >
                {categoriesQuery.data.map((category) => (
                  <option
                    key={category.categoryId}
                    value={category.categoryId}
                    className={styles.categoryLink}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className={styles.editor}>
          <input
            type="text"
            placeholder="заголовок"
            name="article[title]"
            className={styles.editor__field}
          />
          <div className={styles.editor__container}>
            <ReactQuill
              value={textEditor}
              onChange={setTextEditor}
              modules={modules}
              formats={formats}
              placeholder="Введите текст здесь..."
            />
          </div>
        </div>
        <button className={styles.categories__button}>Опубликовать</button>
      </form>
    </div>
  );
};

export default CreateArticleView;
