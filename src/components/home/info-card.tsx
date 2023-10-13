import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { commonColor, genericStyles } from "../../assets/styles/style";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

interface infoCardProps {
  id: number;
  contractNumber: string;
  actualRoi: number;
  contractInitialValue: number;
  contractActualValue: number;
  routeTo: string;
}

function InfoCard(infoCardProps: infoCardProps) {
  const navigation = useNavigation();
  // id: infoCardProps.id,
  //             contractNumber: infoCardProps.contractNumber,
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        infoCardProps.routeTo
          ? navigation.navigate("ContractDetailScreen", {
              id: infoCardProps.id,
              contractNumber: infoCardProps.contractNumber,
            })
          : null
      }
    >
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 16 }}># {infoCardProps.contractNumber}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 12 }}>
            Valor inicial:{infoCardProps.contractInitialValue}
          </Text>
          <Text style={{ fontSize: 14 }}>
            Valor atual: {infoCardProps.contractActualValue}
          </Text>
        </View>
      </View>

      <View>
        <Text style={{ fontSize: 20, color: commonColor.success }}>
          {infoCardProps.actualRoi}% <Text style={{ fontSize: 9 }}>asd</Text>
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
