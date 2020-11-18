import React, { useEffect, useState } from "react";

//Components
import { Button, View, Text, ScrollView } from "react-native";

//Services
import { getMilePrice } from "../../services/apis";
import { styles } from "../../styles/styles";

//Types
import { ICompany } from "../../types/types";
import MilePriceCard from "./components/MilePriceCard";

export default function Home({ navigation }: any) {
  //Companies
  const [companies, setCompanies] = useState<ICompany[]>([]);

  //Loading
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getMilePrice("").then((res: { all: ICompany[] }) => {
      setCompanies(res.all)
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
         <Button title="ccc" onPress={() => navigation.navigate("Venda suas milhas")} />
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </View>
  );
}
