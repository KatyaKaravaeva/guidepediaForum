import { NavLink } from "react-router-dom";
import styles from "./SubscriptionListUser.module.css";
import UserLogo from "../../../assets/images/user_logo.svg";
import Cancel from "../../../assets/images/cancel.svg";

const SubscriptionListUserView = ({ deleteSubscribe, subscriptionList, setSubscription }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subscription_list__get_subscription}>
        {subscriptionList.map((subscription) => (
          <div className={styles.subscription}>
            <span className={styles.subscription__span}>
              <NavLink
                to={`/personal_account/${subscription.userId}`}
                className={styles.subscription_header__nav_link}
              >
                <img
                  className={styles.profile__picture}
                  src={UserLogo}
                  alt="Profile Picture"
                />
                {subscription.username}
              </NavLink>
              <button
                className={styles.subscription_cancel__button}
                onClick={(e) => {
                  e.preventDefault();
                  deleteSubscribe(subscription);
                }}
              >
                <img
                  className={styles.subscription_cancel__picture}
                  src={Cancel}
                  alt="Cancel"
                />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionListUserView;
