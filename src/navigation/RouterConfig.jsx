import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authorization from "../components/Authorization";
import MainPage from "../components/MainPage";
import Registration from "../components/Registration";
import Profile from "../components/Profile";
import Categories from "../components/Categories";
import UserPosts from "../components/UserPosts";
import Bookmarks from "../components/Bookmarks";
import CreateArticle from "../components/CreateArticle";
import Article from "../components/Article";
import CategoryArticles from "../components/CategoryArticles";
import PersonalAccount from "../components/PersonalAccount";

import {
  ROOT,
  AUTHORIZATION,
  REGISTRATION,
  PROFILE,
  CATEGORIES,
  USER_POSTS,
  BOOKMARKS,
  CREATE_ARTICLE,
  ARTICLE,
  PERSONAL_ACCOUNT,
} from "./routes";
import RequiredAuth from "./RequiredAuth";
import RequiredNotAuth from "./RequiredNotAuth";

const RouterConfig = () => {
  return (
    <Routes>
      <Route
        path={ROOT}
        element={
          <RequiredAuth>
            <MainPage />
          </RequiredAuth>
        }
      />
      <Route
        path={AUTHORIZATION}
        element={
          <RequiredNotAuth>
            <Authorization />
          </RequiredNotAuth>
        }
      />
      <Route
        path={REGISTRATION}
        element={
          <RequiredNotAuth>
            <Registration />
          </RequiredNotAuth>
        }
      />
      <Route
        path={PROFILE}
        element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        }
      />
      <Route
        path={CATEGORIES}
        element={
          <RequiredAuth>
            <Categories />
          </RequiredAuth>
        }
      />
      <Route
        path={USER_POSTS}
        element={
          <RequiredAuth>
            <UserPosts />
          </RequiredAuth>
        }
      />
      <Route
        path={BOOKMARKS}
        element={
          <RequiredAuth>
            <Bookmarks />
          </RequiredAuth>
        }
      />
      <Route
        path={CREATE_ARTICLE}
        element={
          <RequiredAuth>
            <CreateArticle />
          </RequiredAuth>
        }
      />
      <Route
        path={`${ARTICLE}/:id`}
        element={
          <RequiredAuth>
            <Article />
          </RequiredAuth>
        }
      />

      <Route
        path={`${CATEGORIES}/:id`}
        element={
          <RequiredAuth>
            <CategoryArticles />
          </RequiredAuth>
        }
      />

      <Route
        path={`${PERSONAL_ACCOUNT}/:id`}
        element={
          <RequiredAuth>
            <PersonalAccount />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default RouterConfig;
