<<<<<<< HEAD
import React, { useEffect, useState } from "react";

//Components
import { Button, View, Text } from "react-native";

//Services
import { getMilePrice } from "../../services/apis";
import { styles } from "../../styles/styles";

//Types
import { ICompany } from "../../types/types";
import MilePriceCard from "./components/MilePriceCard";

export default function Home() {
  //Companies
  const [companies, setCompanies] = useState<ICompany[]>([]);

  //Loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getMilePrice("azul").then((res: ICompany) => {
      setCompanies((prevState) => [...prevState, res])
      console.log(res);
    }
    );
  }, []);

  useEffect(() => {
    companies !== [] && companies[0] && setIsLoaded(true)
  }, [companies])

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      {isLoaded ? (
        <>
          <MilePriceCard
          company={companies[0]}
          
          />
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </View>
  );
}
=======
import React, { useEffect, useState } from "react";

//Components
import { Button, View, Text } from "react-native";

//Services
import { getMilePrice } from "../../services/apis";
import { styles } from "../../styles/styles";

//Types
import { ICompany } from "../../typings/types";

export default function Home() {
  //Companies
  const [companies, setCompanies] = useState<ICompany[]>([]);

  //Loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getMilePrice("azul").then((res: ICompany) =>
    setCompanies((prevState) => [...prevState, res])
    );
  }, []);

  useEffect(() => {
    companies !== [] && companies[0] && setIsLoaded(true)
  }, [companies])

  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      {isLoaded ? (
        <>
          <Text>Carregado!</Text>
          <Text>{companies[0].company}</Text>
          <Button title="aaa" onPress={() => console.log('aaa')} />
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </View>
  );
}
>>>>>>> 22255ea62e5c4f513bee7a987abec4bdcdfdfdb9
