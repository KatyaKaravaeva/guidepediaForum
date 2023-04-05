import { useQuery } from "react-query";
import MainPageView from "./MainPage.view";
import { $authHost } from "../../services/api.service";
import { useState } from "react";

export const MainPageContainer = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isBookMark, setBookMark] = useState(false);
  const mainPageQuery = useQuery(
    ["mainPageData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/article`
      );
      setArticles(() => [...data]);
      setBookMark(() => data[0].status); //ToDo change 0
      console.log("data --", data[0].status);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function makeBookmark(articleId) {
    try {
      const { data } = await $authHost.put(
        `${process.env.REACT_APP_URL}/user/save/article/${articleId}`,
        {
          status: !isBookMark,
        }
      );
      setBookMark((prev) => !prev);
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

  // const mainPageSubscribeQuery = useQuery(
  //   ["mainPageSubscribeData"],
  //   async () => {
  //     const { data } = await $authHost.get(
  //       `${process.env.REACT_APP_URL}/user/subscribtion/article`
  //     );
  //     return data;
  //   },
  //   {
  //     retry: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );
  return (
    <MainPageView
      handleSubmit={handleSubmit}
      articles={articles}
      mainPageQuery={mainPageQuery}
      isSubscribe={isSubscribe}
      setIsSubscribe={setIsSubscribe}
      isBookMark={isBookMark}
      setBookMark={setBookMark}
      makeBookmark={makeBookmark}
    />
  );
};
