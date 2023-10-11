import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { commonColor, genericStyles } from "../../assets/styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

function InfoCard({
  id,
  contractNumber,
  actualRoi,
  contractInitialValue,
  contractActualValue,
  routeTo,
}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        routeTo ? navigation.navigate("ContractDetailScreen", { id,contractNumber }) : null
      }
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 16 }}># {contractNumber}</Text>
        </View>
        <View style={{ fontSize: 14 }}>
          <Text style={{ fontSize: 12 }}>
            Valor inicial:{contractInitialValue}
          </Text>
          <Text>Valor atual: {contractActualValue}</Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 20, color:commonColor.success }} >
          {actualRoi}% <Text style={{ fontSize: 9 }}>asd</Text>
        </Text>
      </View>
      <View>
        <Icon
          name="arrow-forward-ios"
          size={30}
          color={commonColor.primaryColor}
        />
      </View>
    </TouchableOpacity>
  );
}

export default InfoCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    backgroundColor: commonColor.commonWhite,
    borderRadius: 10,
    width: "90%",
    marginVertical: 10,
    padding: 5,
    alignItems: "center",
  },
});
