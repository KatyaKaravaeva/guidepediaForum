import { useParams } from "react-router-dom";
import CategoryArticlesView from "./CategoryArticles.view";
import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";

export const CategoryArticlesContainer = () => {
  const { id } = useParams();
  const categoryArticlesQuery = useQuery(
    ["categoryArticlesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/article/category/${id}`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <CategoryArticlesView categoryArticlesQuery={categoryArticlesQuery} />;
};
