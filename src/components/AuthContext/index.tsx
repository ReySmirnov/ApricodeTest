import React, { createContext, PropsWithChildren } from "react";
import { AuthStore } from "../../store/AuthStore";

const authStore = new AuthStore();

export const Auth = createContext(authStore);

export const AuthContext = (props: PropsWithChildren) => {
  return <Auth.Provider value={authStore}>{props.children}</Auth.Provider>;
};
