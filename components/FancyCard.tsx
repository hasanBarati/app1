import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}> textInComponent </Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://img.freepik.com/free-photo/ui-ux-representations-with-smartphone_23-2150201873.jpg?t=st=1731774614~exp=1731778214~hmac=b3b154cde10b7fc4b3fa74f5500419996c67399161aa464a642254cc3b6a96b9&w=740",
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa</Text>
          <Text style={styles.cardLabel}>Pink City</Text>
          <Text style={styles.cardDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
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
    padding: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    //    flex:1,
    //    alignItems:"center",
    //    justifyContent:"center",
    //    width:100,
    //    height:100,
    //    borderRadius:4,
    //    margin:8
  },
  cardImage: {
    height: 150,
    marginBottom: 8,
    // borderTopLeftRadius:6,
    // borderTopRightRadius:6
  },
  cardElevated: {
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    //    shadowColor:"#333",
    //    shadowOpacity:.4,
    //    shadowRadius:2
  },
  cardTitle: {
    color: "#000000",
    fontSize:22,
    fontWeight:"bold"
  },
  cardLabel: {
    color: "#000000",
    fontSize:16,
    marginBottom:4
  },
  cardDescription: {
    color: "#000000",
    fontSize:12,
    marginBottom:12,
    flexShrink:1,
    marginTop:6
  },
  cardBody:{
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardFooter: {
    color: "#000000",
  },
});
