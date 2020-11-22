import React, { useEffect, useState } from "react";

//Components
import {  View, Text, ScrollView } from "react-native";

//Services
import { getMilePrice } from "../../services/apis";
import { styles } from "../../styles/styles";

//Types
import { ICompany } from "../../typings/myles";
import MilePriceCard from "./components/MilePriceCard";

export default function CompaniesPrice() {
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