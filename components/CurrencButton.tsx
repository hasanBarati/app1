import { View, Text, StyleSheet } from "react-native";
import React, { PropsWithChildren } from "react";

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.country}>{props.name}</Text>
      <Text style={styles.flag}>{props.flag}</Text>
    </View>
  );
};

export default CurrencButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
  },
  flag: {
    fontSize:28,
    color:"#FFFFFF",
    marginBottom:4
  },
  country: {
    fontSize:14,
    color:"#2d3436",
  },
});
