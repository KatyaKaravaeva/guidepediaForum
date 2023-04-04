import { useQuery } from "react-query";
import UserPostsView from "./UserPosts.view";
import { $authHost } from "../../services/api.service";

export const UserPostsContainer = () => {
  const userPostsQuery = useQuery(
    ["userPostsData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/article`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <UserPostsView userPostsQuery={userPostsQuery}/>;
};

