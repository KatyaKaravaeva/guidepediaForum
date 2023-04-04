import { useParams } from "react-router-dom";
import { $authHost } from "../../../services/api.service";
import CommentsListView from "./CommentsList.view";
import { useRef } from "react";

export const CommentsListContainer = ({ comments }) => {
  const { id } = useParams();
  const newCommentRef = useRef();
  async function createComment(event) {
    if (!newCommentRef.current) return;
    const { data } = await $authHost.post(
      `${process.env.REACT_APP_URL}/user/article/${id}/comment`,
      {
        id,
        text: newCommentRef.current.value,
      }
    );
  }
  //console.log("comments", comments);
  return (
    <CommentsListView
      comments={comments}
      createComment={createComment}
      newCommentRef={newCommentRef}
    />
  );
};
