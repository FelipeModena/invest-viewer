//give me a generic home page

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
  SafeAreaViewBase,
} from "react-native";
import { genericStyles } from "../../assets/styles/style";
import { ContractChart } from "../../components/home/contracts-chart";
import InfoCard from "../../components/home/info-card";
import contracts from "../../assets/mocks/contracts";
import contractsMock from "../../assets/mocks/contracts";
import axiosOpenExInstance from "../../services/axios";

const infoCardsContracts = contractsMock.map((contract) => {
  return (
    <InfoCard
      actualRoi={contract.actualRoi}
      key={contract.contract}
      contractActualValue={contract.actualContractValue}
      contractInitialValue={contract.initialInvestment}
      contractNumber={contract.contract}
      id={parseInt(contract.contract)}
      routeTo={"detail"}
    />
  );
});

export function HomeScreen() {
  const [rates, setRates] = useState("");

  async function getRates() {
    const res = await axiosOpenExInstance.get("latest.json/");
    console.log(res.data);
    setRates(res.data.rates.UAH);
  }

  return (
    <SafeAreaView>
      <ScrollView style={genericStyles.body}>
        <ContractChart />
        <View style={genericStyles.container}>
          <Text>Contratos ativos</Text>
          {infoCardsContracts}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
