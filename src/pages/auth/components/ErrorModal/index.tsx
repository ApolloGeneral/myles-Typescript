import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import FadeInOut from "react-native-fade-in-out";

interface IProps {
  type: string;
  details: string;
  setter: (value: boolean) => void;
}

import { styles } from "../../../../styles/styles";

export default ({ type, details, setter }: IProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
    setTimeout(() => {
      setAnimate(false);
    }, 4000);
    setTimeout(() => {
      setter(false);
    }, 4500);
  }, []);
  return (
    <FadeInOut visible={animate} duration={500} style={styles.loginErrorModal}>
      <Text style={styles.loginTitleErrorModal}>{type}</Text>
      <Text style={styles.loginTextErrorModal}>{details}</Text>
    </FadeInOut>
  );
};
