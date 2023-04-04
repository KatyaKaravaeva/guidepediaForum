import { useState } from "react";
import ProfileView from "./Profile.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const ProfileContainer = () => {
  const [userData, setUserData] = useState({});
  const [isActive, setIsActive] = useState(false);
  const profileQuery = useQuery(
    ["userProfileData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/profile`
      );
      setUserData((prev) => ({ ...prev, ...data }));
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    if (isActive) return;
    const { username, card_details, profile } = userData;
    try {
      const { data } = await $authHost.put("/user/profile", {
        username,
        card_details,
        profile,
      });
      setUserData((prev) => ({ ...prev, ...data }));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ProfileView
      profileQuery={profileQuery}
      isActive={isActive}
      setIsActive={setIsActive}
      handleSubmit={handleSubmit}
      userData={userData}
      setUserData={setUserData}
    />
  );
};