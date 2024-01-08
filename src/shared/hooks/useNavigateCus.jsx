import { useNavigate } from "react-router-dom";

export const useNavigateCus = () => {
  const navigate = useNavigate();

  const goPage = (route) => {
    navigate(route);
  };
  return {
    goPage,
  };
};
