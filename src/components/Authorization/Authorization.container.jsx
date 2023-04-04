import AuthorizationView from "./Authorization.view";
import { useDispatch } from "react-redux";
import { $host } from "../../services/api.service";
import { setUserData } from "../../redux/actions/userActions";

export const AuthorizationContainer = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $host.post("/auth/signin", {
        login: target["signIn[login]"].value,
        password: target["signIn[password]"].value,
      });
      console.log(data);
      dispatch(setUserData({ ...data.user, isAuth: true }));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch (error) {
      console.log(error);
    }
  };
  return <AuthorizationView handleSubmit={handleSubmit} />;
};


