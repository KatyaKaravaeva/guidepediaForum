import { $authHost } from "../../../services/api.service";
import CommentsListView from "./SubscriptionListUser.view";
import { useRef } from "react";
import SubscriptionListUserView from "./SubscriptionListUser.view";
import { useParams } from "react-router-dom";

export const SubscriptionListUserContainer = ({
  subscriptionList,
  setSubscribeList,
  setSubscription
}) => {
  const { id } = useParams();
  async function deleteSubscribe(subscription) {
    try {
      const { data } = await $authHost.post(
        `${process.env.REACT_APP_URL}/user/subscribtion/${subscription.userId}?status=false` // toDo
      );
      setSubscribeList((prev) =>
        prev.filter((x) => x.userId !== subscription.userId)
      );
      setSubscription((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SubscriptionListUserView
      deleteSubscribe={deleteSubscribe}
      subscriptionList={subscriptionList}
      setSubscribeList={setSubscribeList}
    />
  );
};
