import styles from "./PersonalAccount.module.css";
import UserLogo from "../../assets/images/user_logo.svg";
import SubscriptionList from "./SubscriptionList";
import style from "../../assets/styles/loading.module.css";

const PersonalAccountView = ({
  personalAccountQuery,
  subscriptionQuery,
  showSubscription,
  setSubscription,
}) => {
  return (
    <>
      {personalAccountQuery.isLoading || personalAccountQuery.isRefetching ? (
        <>
          <div className={style.article__loading}>
            <h1>loading...</h1>
          </div>
        </>
      ) : (
        <div>
          <form className={styles.profile}>
            <div className={styles.profile__frame}>
              <img
                className={styles.profile__picture}
                src={UserLogo}
                alt="Profile Picture"
              />
              <h2 className={styles.profile__name}>
                {personalAccountQuery.data.username}
                {console.log(personalAccountQuery)}
              </h2>
            </div>
            <div className={styles.profile__info}>
              <label className={styles.profile__label}>Имя пользователя</label>
              <input
                className={styles.profile__input}
                type="text"
                placeholder="Введите имя пользователя"
                disabled={true}
                value={personalAccountQuery.data.username}
              />
              <label className={styles.profile__label}>Реквизиты</label>
              <input
                className={styles.profile__input}
                type="text"
                placeholder="Введите реквизиты"
                disabled={true}
                value={personalAccountQuery.data.cardDetails}
              />
              <label className={styles.profile__label}>О себе</label>
              <input
                className={styles.profile__input}
                type="text"
                placeholder="Расскажите немного о себе"
                disabled={true}
                value={personalAccountQuery.data.profile}
              />
            </div>
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
              {personalAccountQuery.isLoading ||
              personalAccountQuery.isRefetching ||
              !showSubscription ? (
                <>
                  <div className={styles.subscription__loading}>
                    <h1>loading...</h1>
                  </div>
                </>
              ) : (
                <SubscriptionList
                  subscriptionList={subscriptionQuery.data}
                  setSubscription={setSubscription}
                />
              )}
            </>
          ) : null}
        </div>
      )}
    </>
  );
};

export default PersonalAccountView;
