import { Navigate, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};
