import styles from "./Profile.module.css";
import UserLogo from "../../assets/images/user_logo.svg";
import SubscriptionListUser from "./SubscriptionListUser";
const ProfileView = ({
  subscriptionProfileQuery,
  showSubscription,
  setSubscription,
  subscribeList,
  setSubscribeList,
  profileQuery,
  isActive,
  setIsActive,
  handleSubmit,
  userData,
  setUserData,
}) => {
  return (
    <div>
      <form className={styles.profile} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.profile__frame}>
          <img
            className={styles.profile__picture}
            src={UserLogo}
            alt="Profile Picture"
          />
          <h2 className={styles.profile__name}>{userData.username}</h2>
        </div>
        <div className={styles.profile__info}>
          <label className={styles.profile__label}>Имя пользователя</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите имя пользователя"
            disabled={!isActive}
            value={userData.username}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                username: e.target.value,
              }))
            }
          />
          <label className={styles.profile__label}>Реквизиты</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите реквизиты"
            disabled={!isActive}
            value={userData.cardDetails}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                cardDetails: e.target.value,
              }))
            }
          />
          <label className={styles.profile__label}>О себе</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Расскажите немного о себе"
            disabled={!isActive}
            value={userData.profile}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                profile: e.target.value,
              }))
            }
          />
        </div>
        <button
          className={styles.profile__button}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {!isActive ? "Редактировать" : "Сохранить"}
        </button>
      </form>
      <div className={styles.subscription__data}>
        <button
          className={styles.subscription_btn}
          onClick={() => setSubscription((prev) => !prev)}
        >
          {showSubscription
            ? "Скрыть подписки пользователя"
            : "Показать подписки пользователя"}
        </button>
      </div>
      {showSubscription ? (
        <>
          {profileQuery.isLoading ||
          profileQuery.isRefetching ||
          subscriptionProfileQuery.isLoading ||
          subscriptionProfileQuery.isRefetching ||
          !showSubscription ? (
            <>
              <div className={styles.subscription__loading}>
                <h1>loading...</h1>
              </div>
            </>
          ) : (
            <SubscriptionListUser
              subscriptionList={subscribeList}
              setSubscribeList={setSubscribeList}
              setSubscription={setSubscription}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default ProfileView;
