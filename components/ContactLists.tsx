import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}> textInComponent </Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
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
  container: {
    paddingHorizontal: 16,
    marginBottom:4
  },
  userCard: {
    flex:1,
    flexDirection:"row",
    alignItems:"center",
    marginBottom:3,
    backgroundColor:"#8D3DAF",
    padding:4,
    borderRadius:4,
    color:"white"
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:16
  },
  userName: {
    fontSize:16,
    fontWeight:"600",
        color:"white"
  },
  userStatus: {
      color:"white"
  },
});

const contacts = [
  {
    uid: 1,
    name: "Hitesh Choudhary",
    status: "Just an extra ordinary teacher",
    imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
  },
  {
    uid: 2,
    name: "John Doe",
    status: "Always learning something new",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    uid: 3,
    name: "Jane Smith",
    status: "Passionate about coding",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    uid: 4,
    name: "Michael Johnson",
    status: "Avid traveler and developer",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    uid: 5,
    name: "Emily Davis",
    status: "Design enthusiast and problem solver",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    uid: 6,
    name: "David Brown",
    status: "Technology enthusiast",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    uid: 7,
    name: "Olivia Wilson",
    status: "Loves creating beautiful designs",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    uid: 8,
    name: "Ethan Thomas",
    status: "Back-end wizard",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    uid: 9,
    name: "Sophia Martinez",
    status: "Front-end enthusiast",
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    uid: 10,
    name: "Liam Garcia",
    status: "AI researcher and hobbyist",
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    uid: 11,
    name: "Isabella Rodriguez",
    status: "Tech blogger and mentor",
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];
