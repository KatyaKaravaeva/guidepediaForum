import { useQuery } from "react-query";
import CategoriesView from "./Categories.view";
import { $authHost } from "../../services/api.service";

export const CategoriesContainer = () => {
  const categoriesQuery = useQuery(
    ["categoriesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/article/category`
      );
      // const data = [
      //   {
      //     categoryId: 1,
      //     name: "string",
      //   },
      //   {
      //     categoryId: 2,
      //     name: "string",
      //   },
      // ];
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <CategoriesView categoriesQuery={categoriesQuery} />;
};
