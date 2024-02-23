import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatItem = ({ image, name, message, time }) => {
  return (
    <View style={styles.root}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <View style={styles.detailsContainer}>
        <View style={styles.nameAndTimeContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginVertical: 10,
  },
  name: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  avatar: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 30,
  },
  detailsContainer: {
    marginLeft: 12,
    justifyContent: "space-evenly",
    flex: 1,
  },
  message: {
    color: "#fff",
    fontSize: 13,
  },
  nameAndTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    color: "lightblue",
    fontWeight: "bold",
  },
});
