import { useState } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import PersonalAccountView from "./PersonalAccount.view";
import { useParams } from "react-router-dom";

export const PersonalAccountContainer = () => {
  const { id } = useParams();
  const personalAccountQuery = useQuery(
    ["personalAccountData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/user/profile/${id}`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return <PersonalAccountView personalAccountQuery={personalAccountQuery} />;
};
