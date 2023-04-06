import { useState } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import PersonalAccountView from "./PersonalAccount.view";

export const PersonalAccountContainer = () => {
  const personalAccountQuery = useQuery(
    ["personalAccountData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/profile`
      );
      console.log("jkj", data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return <PersonalAccountView personalAccountQuery={personalAccountQuery} />;
};
