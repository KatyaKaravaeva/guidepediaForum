import { useQuery } from "react-query";
import CreateArticleView from "./CreateArticle.view";
import { $authHost } from "../../services/api.service";
import { useState } from "react";

export const CreateArticleContainer = () => {
  const [textEditor, setTextEditor] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const categories = target["article[categories]"].value;
    const title = target["article[title]"].value;
    if (!categories.trim() || !title.trim() || !textEditor.trim()) {
      alert("Должны быть заполнены все поля");
      return;
    }
    try {
      const { data } = await $authHost.post("user/article", {
        categories,
        title,
        text: textEditor,
      });
      alert("Запись создана");
      setTextEditor((prev) => "");
      target["article[categories]"].value = "";
      target["article[title]"].value = "";
    } catch (error) {
      console.log(error);
    }
  }
  const categoriesQuery = useQuery(
    ["categoriesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/article/category`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <CreateArticleView
      categoriesQuery={categoriesQuery}
      textEditor={textEditor}
      setTextEditor={setTextEditor}
      handleSubmit={handleSubmit}
    />
  );
};
