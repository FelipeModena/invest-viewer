import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import cotracts from "../../assets/mocks/contracts";


const ContractDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { contractNumber } = route.params;
  navigation.setOptions({
    title: `Contrato #${contractNumber?contractNumber:""}`,
  });

  

  return (
    <ScrollView>
      <Text>ContractDetailScreen {id}</Text>
    </ScrollView>
  );
};

export default ContractDetailScreen;

const styles = StyleSheet.create({});
