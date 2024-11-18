import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ActionCard() {
  function openWebsite(url:string) {

  }
  return (
    <View>
      <Text style={styles.headingText}> textInComponent </Text>
      <View style={[styles.card, styles.elavatedCard]}>
        <View style={styles.headingContainer}>
           <Text style={styles.headerText}>Waht's new in javascript 21</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201873.jpg?t=st=1731774614~exp=1731778214~hmac=b3b154cde10b7fc4b3fa74f5500419996c67399161aa464a642254cc3b6a96b9&w=740",
          }}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite("/")}>
            <Text style={styles.social}>Rerad More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite("/")}>
            <Text style={styles.social}>Fallow Me</Text>
          </TouchableOpacity>
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
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elavatedCard: {
    backgroundColor: "#ffffff",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
  },
  headingContainer: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardImage: {
    height: 150,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  social: {
    fontSize: 16,
    shadowColor: "#333",
    shadowOpacity:0.4
  },
});
