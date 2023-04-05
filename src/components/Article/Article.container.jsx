import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import ArticleView from "./Article.view";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";

export const ArticleContainer = () => {
  const { id } = useParams();
  const [isLike, setLike] = useState(false);
  const [userID, setUserID] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [commentsShow, setCommentsShow] = useState(
    searchParams.get("comments") === "true" ? true : false
  );
  const [isBookMark, setBookMark] = useState(false);
  const [isSubscribe, subscribeToUser] = useState(false);

  const commentsQuery = useQuery(
    ["commentsData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/article/${id}/comment`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function changeLike() {
    setLike((prev) => !prev);
    const { data } = await $authHost.post(
      `${process.env.REACT_APP_URL}/user/article/reaction`,
      {
        id,
        isLike,
      }
    );
  }

  async function changeSubscribe() {
    subscribeToUser((prev) => !prev);
    const { data } = await $authHost.post(
      `${process.env.REACT_APP_URL}/user/subscribtion/${userID}`
    );
    console.log(data);
  }

  async function makeBookmark() {
    try {
      const { data } = await $authHost.put(
        `${process.env.REACT_APP_URL}/user/save/article/${id}`,
        {
          status: !isBookMark,
        }
      );
      setBookMark((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }

  const articleQuery = useQuery(
    ["articleData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/article/${id}`
      );
      if (data.user_likes) {
        setLike(() => true);
        data.likes -= 1;
      }
      setBookMark(() => data.status);
      setUserID(() => data.users.userId);
      //console.log("1" + author);
      // console.log("id " + id);
      // console.log(data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const likesQuery = useQuery(
    ["likesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/article/reaction/count/${id}`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <ArticleView
      commentsQuery={commentsQuery}
      commentsShow={commentsShow}
      setCommentsShow={setCommentsShow}
      articleQuery={articleQuery}
      isLike={isLike}
      changeLike={changeLike}
      likesQuery={likesQuery}
      isBookMark={isBookMark}
      setBookMark={setBookMark}
      makeBookmark={makeBookmark}
      isSubscribe={isSubscribe}
      subscribeToUser={subscribeToUser}
      changeSubscribe={changeSubscribe}
    />
  );
};
