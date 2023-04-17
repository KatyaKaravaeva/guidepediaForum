import { NavLink } from "react-router-dom";
import styles from "./SubscriptionList.module.css";
import UserLogo from "../../../assets/images/user_logo.svg";

const SubscriptionListView = ({ subscriptionList, setSubscription }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subscription_list__get_subscription}>
        {subscriptionList.map((subscription) => (
          <div className={styles.subscription}>
            <span className={styles.subscription__span}>
              <NavLink
                to={`/personal_account/${subscription.userId}`}
                className={styles.subscription_header__nav_link}
                onClick={() => setSubscription((prev) => !prev)}
              >
                <img
                className={styles.profile__picture}
                src={UserLogo}
                alt="Profile Picture"
              />
                {subscription.username}
              </NavLink>
            </span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionListView;
