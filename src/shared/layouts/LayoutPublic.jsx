import { Navigate, Outlet } from "react-router-dom";
import { useStoreApp } from "@/store";
import { MessageStore } from "@/shared/components/MessageStore";

export const LayoutPublic = () => {
  const stateAuth = useStoreApp((state) => state);
  const isLogged = stateAuth.status === "authorized";

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>LayoutPublic</h1>
      <MessageStore />
      <Outlet />
    </>
  );
};
