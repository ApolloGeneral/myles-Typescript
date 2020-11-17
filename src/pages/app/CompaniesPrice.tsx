import React, { useEffect, useState } from "react";

//Components
import { Button, View, Text, ScrollView } from "react-native";

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
          <ScrollView>
            <View style={styles.ViewCardHome}>
              {companies.map(company =>
                <MilePriceCard company={company} />
              )}
            </View>
          </ScrollView>
        </>
      ) : (
        <>
          <Text>Carregando...</Text>
        </>
      )}
    </View>
  );
}