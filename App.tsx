import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthWrapper from "./AuthWrapper";
import { UserProvider } from "./src/context/UserContext";
import SplashScreen from "react-native-splash-screen";
import Loading from "./src/pages/auth/Loading";

export default function App() {
  const [animate, setAnimate] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    SplashScreen && SplashScreen.hide();
    setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setLoaded(true);
      }, 100);
    }, 1000);
  }, []);
  return (
    <>
      {loaded ? (
        <NavigationContainer>
          <UserProvider>
            <AuthWrapper />
          </UserProvider>
        </NavigationContainer>
      ) : (
        <Loading shouldAnimate={animate} />
      )}
    </>
  );
}
