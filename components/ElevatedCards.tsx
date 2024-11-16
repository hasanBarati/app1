import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function ElevatedCards() {
    return (
      <View>
        <Text style={styles.headingText}> textInComponent </Text>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
            <View style={[styles.card,styles.cardElevated]} >
                <Text>Tab</Text>
            </View>
        </ScrollView>
      </View>
    );
  }


  const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: "bold",
      paddingHorizontal: 8,
    },
    container:{
        padding:8
    },
    card:{
       flex:1,
       alignItems:"center",
       justifyContent:"center",
       width:100,
       height:100,
       borderRadius:4,
       margin:8
    },
    cardElevated:{
       backgroundColor:"#CAD5E2",
       elevation:1,
       shadowOffset:{
          width:1,
          height:1
       },
       shadowColor:"#333",
       shadowOpacity:.4,
       shadowRadius:2
    }

})