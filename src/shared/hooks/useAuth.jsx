import { useStoreApp } from "../../store";

export const useAuth = () => {
  const stateAuth = useStoreApp((state) => state);

  return {
    ...stateAuth,
  };
};
