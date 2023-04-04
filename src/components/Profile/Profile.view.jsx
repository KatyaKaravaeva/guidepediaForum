import styles from "./Profile.module.css";
import UserLogo from "../../assets/images/user_logo.svg";

const ProfileView = ({
  profileQuery,
  isActive,
  setIsActive,
  handleSubmit,
  userData,
  setUserData,
}) => {
  return (
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
  );
};

export default ProfileView;
