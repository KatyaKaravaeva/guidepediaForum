import { useParams } from "react-router-dom";
import { $authHost } from "../../../services/api.service";
import CommentsListView from "./SubscriptionList.view";
import { useRef } from "react";
import SubscriptionListView from "./SubscriptionList.view";

export const SubscriptionListContainer = ({ subscriptionList, setSubscription }) => {
  const { id } = useParams();
  return (
    <SubscriptionListView
    subscriptionList={subscriptionList}
    setSubscription={setSubscription}
    />
  );
};
