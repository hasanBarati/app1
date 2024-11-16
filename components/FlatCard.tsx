import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}> textInComponent </Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>hello</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>hello</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>hello</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  container: {
     flex:1,
     flexDirection:"row",
     padding:8
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardOne: {
    backgroundColor: "green",
  },
});
