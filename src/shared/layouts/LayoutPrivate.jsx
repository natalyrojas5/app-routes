import { Navigate, Outlet } from "react-router-dom";
import { useStoreApp } from "@/store";

import { MessageStore } from "@/shared/components/MessageStore";

export const LayoutPrivate = () => {
  const stateAuth = useStoreApp((state) => state);
  const isLogged = stateAuth.status === "authorized";

  if (!isLogged) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <h1>LayoutPrivate</h1>
      <MessageStore />
      <Outlet />
    </>
  );
};
