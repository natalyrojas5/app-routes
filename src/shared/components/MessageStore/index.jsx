import "./styles.css";

import { useAuth } from "@/shared/hooks/useAuth";

export const MessageStore = () => {
  const auth = useAuth().getUser();

  return (
    <pre className="messageStore-bg">
      <code>{JSON.stringify(auth, null, 3)}</code>
    </pre>
  );
};
