import { useNavigateCus } from "@/shared/hooks/useNavigateCus";

export const Home = () => {
  const { goPage } = useNavigateCus();

  return (
    <>
      <h3>Página: Home</h3>
      <div className="list-buttons">
        <button onClick={() => goPage("/dashboard")}>Ir a Dashboard</button>
        <button onClick={() => goPage("/auth/login")}>
          Ir a Inicio de Sesión
        </button>
      </div>
    </>
  );
};
