import { useQuery } from "react-query";
import MainPageView from "./MainPage.view";
import { $authHost } from "../../services/api.service";
import { useState } from "react";

export const MainPageContainer = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [articles, setArticles] = useState([]);
  const mainPageQuery = useQuery(
    ["mainPageData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/article`
      );
      setArticles(() => [...data]);
      console.log("data --", data[0].status);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function makeBookmark(article) {
    try {
      const { data } = await $authHost.put(
        `${process.env.REACT_APP_URL}/user/save/article/${article.articleId}`,
        {
          status: articles.find((x) => x.articleId === article.articleId)
            .status,
        }
      );
      setArticles((prev) =>
        prev.map((x) => {
          if (article.articleId !== x.articleId) return article;
          x.status = !x.status;
          return x;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}${
          !isSubscribe ? "/user/subscribtion/article" : "/article"
        }`
      );
      setArticles(() => [...data]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <MainPageView
      handleSubmit={handleSubmit}
      articles={articles}
      mainPageQuery={mainPageQuery}
      isSubscribe={isSubscribe}
      setIsSubscribe={setIsSubscribe}
      makeBookmark={makeBookmark}
    />
  );
};
