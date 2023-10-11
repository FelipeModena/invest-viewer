//give me a generic home page

import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { genericStyles } from "../../assets/styles/style";
import { ContractChart } from "../../components/home/contracts-chart";
import InfoCard from "../../components/generic/info-card";

const contractsList = [
  {
    id: 1,
    contractNumber: "000457",
    actualRoi: 7.3,
    contractInitialValue: 20000,
    contractActualValue: 22304,
  },
  {
    id: 2,
    contractNumber: "000458",
    actualRoi: 8.1,
    contractInitialValue: 25000,
    contractActualValue: 27025,
  },

  {
    id: 4,
    contractNumber: "000460",
    actualRoi: 9.21,
    contractInitialValue: 30000,
    contractActualValue: 32760,
  },
];

infoCardsContracts = contractsList.map((contract) => {
  return (
    <InfoCard
      actualRoi={contract.actualRoi}
      key={contract.id}
      contractActualValue={contract.contractActualValue}
      contractInitialValue={contract.contractInitialValue}
      contractNumber={contract.contractNumber}
      id={contract.id}
      routeTo={"detail"}
    />
  );
});

export function Home() {
  return (
    <ScrollView style={genericStyles.body}>
      <ContractChart />
      <View style={genericStyles.container}>
        <Text>Contrados ativos</Text>
        {infoCardsContracts}
      </View>
    </ScrollView>
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
