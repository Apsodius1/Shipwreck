import Router from "./src/router";
import { AuthContextProvider } from "./src/hooks/authContext";

export default function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}
