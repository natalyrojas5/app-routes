import { useNavigateCus } from "@/shared/hooks/useNavigateCus";
import { useAuth } from "@/shared/hooks/useAuth";
import { Toast } from "@/utils/toast";

export const Dashboard = () => {
  const auth = useAuth();
  const { goPage } = useNavigateCus();

  const logoutUser = () => {
    auth.logoutUser();
    Toast.fire({
      icon: "success",
      title: "Cerro Sesión",
    });
  };

  return (
    <>
      <h3>Página: Dashboard</h3>
      <div className="list-buttons">
        <button onClick={logoutUser}>Cerrar Sesión</button>
        <button onClick={() => goPage("/auth/login")}>
          Ir a Inicio de Sesión
        </button>
      </div>
    </>
  );
};
