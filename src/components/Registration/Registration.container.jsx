import { useDispatch } from "react-redux";
import { $host } from "../../services/api.service";
import RegistrationView from "./Registration.view";
import { setUserData } from "../../redux/actions/userActions";

export const RegistrationContainer = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $host.post("/auth/signup", {
        login: target["registration[login]"].value,
        password: target["registration[password]"].value,
        username: target["registration[name]"].value,
        user_role: "USER",
        card_details: target["registration[bank]"].value,
        profile: target["registration[data]"].value,
      });
      console.log(data);
      dispatch(setUserData({ ...data.user, isAuth: true }));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch (error) {
      console.log(error);
    }
  };
  return <RegistrationView handleSubmit={handleSubmit} />;
};
