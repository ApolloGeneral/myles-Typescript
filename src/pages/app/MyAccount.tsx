import React, { useEffect, useState } from "react";

//Components
import { Text, View } from "react-native";

//Services
import { getMilePrice } from "../../services/apis";
import { styles } from "../../styles/styles";

//Types
import { ICompany } from "../../typings/types";

export default function MyAccount() {
  //Companies
  const [companies, setCompanies] = useState<ICompany[]>([]);

  //Loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getMilePrice("tudo-azul").then((res: ICompany) =>
    setCompanies((prevState) => [...prevState, res])
    );
  }, []);

  useEffect(() => {
    companies !== [] && companies[0] && setIsLoaded(true)
  }, [companies])

  return (
    <View style={styles.container}>
      <Text>My Account!</Text>
      {isLoaded ? (
        <>
          <Text>Carregado!</Text>
          <Text>{companies[0].company}</Text>
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </View>
  );
}
