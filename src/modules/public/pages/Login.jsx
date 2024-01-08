import { useNavigateCus } from "@/shared/hooks/useNavigateCus";
import { useAuth } from "@/shared/hooks/useAuth";
import { Toast } from "@/utils/toast";

export const Login = () => {
  const { goPage } = useNavigateCus();
  const auth = useAuth();

  const logged = () => {
    auth.loginUser();
    Toast.fire({
      icon: "success",
      title: "Inicio Sesión",
    });
  };

  return (
    <>
      <h3>Página: Iniciar Sesión</h3>
      <div className="list-buttons">
        <button onClick={logged}>Iniciar Sesión</button>
        <button onClick={() => goPage("/dashboard")}>Ir a Dashboard</button>
        <button onClick={() => goPage("/auth")}>Ir a Home</button>
      </div>
    </>
  );
};
