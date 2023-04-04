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
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}${
          isSubscribe ? "/user/subscribtion/article" : "/article"
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
    />
  );
};
