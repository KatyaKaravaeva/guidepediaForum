import { NavLink } from "react-router-dom";
import UserLogo from "../../assets/images/user_logo.svg";
import CategoryLogo from "../../assets/images/category_img.svg";
import CreateArticleLogo from "../../assets/images/create_article_img.svg";
import PostsLogo from "../../assets/images/posts_img.svg";
import BookMarksLogo from "../../assets/images/bookmarks_img.svg";
import Logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";
import {
  PROFILE,
  ROOT,
  CATEGORIES,
  USER_POSTS,
  BOOKMARKS,
  CREATE_ARTICLE,
} from "../../navigation/routes";
import { useSelector } from "react-redux";

const HeaderView = () => {
  const { user } = useSelector((state) => state);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          {user.isAuth ? (
            <NavLink to={PROFILE} className={styles.header__logo}>
              <img src={UserLogo} />
            </NavLink>
          ) : null}
          <NavLink to={ROOT} className={styles.header__title}>
            <img src={Logo} />
          </NavLink>
          {user.isAuth ? (
            <>
              <nav className={styles.header__nav}>
                <ul className={styles.header__nav_list}>
                  <li className={styles.header__nav_item}>
                    <NavLink
                      to={CATEGORIES}
                      className={styles.header__nav_link}
                    >
                      <img src={CategoryLogo} />
                    </NavLink>
                  </li>
                  <li className={styles.header__nav_item}>
                    <NavLink
                      to={CREATE_ARTICLE}
                      className={styles.header__nav_link}
                    >
                      <img src={CreateArticleLogo} />
                    </NavLink>
                  </li>
                  <li className={styles.header__nav_item}>
                    <NavLink
                      to={USER_POSTS}
                      className={styles.header__nav_link}
                    >
                      <img src={PostsLogo} />
                    </NavLink>
                  </li>
                  <li className={styles.header__nav_item}>
                    <NavLink to={BOOKMARKS} className={styles.header__nav_link}>
                      <img src={BookMarksLogo} />
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className={styles.header__search}>
                <span className={styles.header__search_icon}></span>
                <input
                  className={styles.header__search_field}
                  type="text"
                  placeholder="search"
                />
              </div>
            </>
          ) : null}
        </div>
      </header>
    </>
  );
};

export default HeaderView;
