import styles from "./PersonalAccount.module.css";
import UserLogo from "../../assets/images/user_logo.svg";

const PersonalAccountView = ({ personalAccountQuery }) => {
  return (
    <form className={styles.profile}>
      <div className={styles.profile__frame}>
        <img
          className={styles.profile__picture}
          src={UserLogo}
          alt="Profile Picture"
        />
        <h2 className={styles.profile__name}>
          {personalAccountQuery.data.username}
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
  );
};

export default PersonalAccountView;
