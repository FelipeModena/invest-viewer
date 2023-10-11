import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import contracts from "../../assets/mocks/contracts";
import { LineChart, yAxisSides } from "react-native-gifted-charts";
import { genericStyles } from "../../assets/styles/style";

const ContractDetailScreen = ({ route, navigation }: any) => {
  const { id } = route.params || "21";
  const { contractNumber } = route.params || "21";
  navigation.setOptions({
    title: `Contrato #${contractNumber ? contractNumber : ""}`,
  });

  const lineDataReal = contracts[0].data.map((contract) => {
    return {
      value: contract.moneySum,
      dataPointText: `R$ ${contract.moneySum}`,
      label: contract.month,
    };
  });
  const lineDataRealChart2 = contracts[0].data.map((contract) => {
    const [monthStr, yearStr] = contract.month.split("/");
    const date = new Date(parseInt(yearStr), parseInt(monthStr) - 1, 1);
    const formattedDate = `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;

    return {
      date: formattedDate,
      value: contract.moneySum,
      isFirstDayOfMonth: date.getDate() === 1,
    };
  });

  const ptData = [
    { value: 160, date: "1 Apr 2022" },
    { value: 180, date: "2 Apr 2022" },
    { value: 190, date: "3 Apr 2022" },
    { value: 180, date: "4 Apr 2022" },
    { value: 140, date: "5 Apr 2022" },
    { value: 145, date: "6 Apr 2022" },
    { value: 160, date: "7 Apr 2022" },
    { value: 200, date: "8 Apr 2022" },

    { value: 220, date: "9 Apr 2022" },
    {
      value: 240,
      date: "10 Apr 2022",
      label: "10 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 280, date: "11 Apr 2022" },
    { value: 260, date: "12 Apr 2022" },
    { value: 340, date: "13 Apr 2022" },
    { value: 385, date: "14 Apr 2022" },
    { value: 280, date: "15 Apr 2022" },
    { value: 390, date: "16 Apr 2022" },

    { value: 370, date: "17 Apr 2022" },
    { value: 285, date: "18 Apr 2022" },
    { value: 295, date: "19 Apr 2022" },
    {
      value: 300,
      date: "20 Apr 2022",
      label: "20 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 280, date: "21 Apr 2022" },
    { value: 295, date: "22 Apr 2022" },
    { value: 260, date: "23 Apr 2022" },
    { value: 255, date: "24 Apr 2022" },

    { value: 190, date: "25 Apr 2022" },
    { value: 220, date: "26 Apr 2022" },
    { value: 205, date: "27 Apr 2022" },
    { value: 230, date: "28 Apr 2022" },
    { value: 210, date: "29 Apr 2022" },
    {
      value: 200,
      date: "30 Apr 2022",
      label: "30 Apr",
      labelTextStyle: { color: "lightgray", width: 60 },
    },
    { value: 240, date: "1 May 2022" },
    { value: 250, date: "2 May 2022" },
    { value: 280, date: "3 May 2022" },
    { value: 250, date: "4 May 2022" },
    { value: 210, date: "5 May 2022" },
  ];

  return (
    <ScrollView style={genericStyles.body}>
      {SecondChart(ptData)}
      {SecondChart(lineDataRealChart2)}
    </ScrollView>
  );

  function lineChartDetail() {
    return (
      <LineChart
        initialSpacing={0}
        data={lineDataReal}
        textColor1="yellow"
        textShiftY={-8}
        textShiftX={-10}
        textFontSize={13}
        thickness={1}
        focusEnabled
        scrollToEnd
        isAnimated
        showStripOnFocus
        showTextOnFocus
        hideRules
        yAxisColor="#0BA5A4"
        showVerticalLines
        verticalLinesColor="rgba(14,164,164,0.5)"
        xAxisColor="#0BA5A4"
        color="#0BA5A4"
      />
    );
  }
};

const SecondChart = (ptData: Array<any>) => {
  let maxValue;
  if (ptData?.length > 0) {
    maxValue = ptData.reduce((max, item) => {
      console.log(item?.isFirstDayOfMonth);
      
      return Math.max(max, item.value);
    });
  }

  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 5,
      }}
    >
      <LineChart
        areaChart
        data={ptData}
        rotateLabel
        width={300}
        hideDataPoints
        spacing={10}
        color="#00ff83"
        thickness={2}
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        maxValue={maxValue}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{ color: "gray" }}
        yAxisSide={yAxisSides.LEFT}
        xAxisColor="lightgray"
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: "lightgray",
          pointerStripWidth: 2,
          pointerColor: "lightgray",
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: (items: any) => {
            return (
              <View
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: "center",
                  marginTop: -30,
                  marginLeft: -40,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: "center",
                  }}
                >
                  {items[0].date}
                </Text>

                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: "white",
                  }}
                >
                  <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                    {"$" + items[0].value + ".0"}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default ContractDetailScreen;

const styles = StyleSheet.create({});
