import BookmarksView from "./Bookmarks.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const BookmarksContainer = () => {
  const bookMarksQuery = useQuery(
    ["bookMarksData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/saved/articles`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <BookmarksView bookMarksQuery={bookMarksQuery}/>;
};

