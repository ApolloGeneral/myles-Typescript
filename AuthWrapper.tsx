import React, { useContext } from "react";
import AuthRoutes from "./src/routes/AuthRoutes";
import Routes from "./src/routes/AppRoutes";
import { UserContext } from "./src/context/UserContext";

export default function AuthWrapper() {
  const { isSigned } = useContext(UserContext);
  console.log("signed? ", isSigned);
  return <>{isSigned ? <Routes /> : <AuthRoutes />}</>;
}
