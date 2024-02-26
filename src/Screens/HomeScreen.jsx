import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ChatItem from "../Components/ChatItem";
import chats from "../../assets/WhatsApp/ChatRooms";
import dayjs from "dayjs";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.rowBtw}>
        <Entypo name="dots-three-horizontal" size={24} color="lightblue" />
        <View style={styles.rowBtw}>
          <Feather name="camera" size={24} color="lightblue" />
          <AntDesign
            name="pluscircle"
            size={24}
            color="lightblue"
            style={{ marginLeft: 20, marginRight: 10 }}
          />
        </View>
      </View>
      <Text style={styles.title}>Chats</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={"#fff"}
      />
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <ChatItem
            image={item.users[1].imageUri}
            name={item.users[1].name}
            message={item.lastMessage.content}
            time={dayjs(item.lastMessage.createdAt).fromNow()}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    padding: 15,
  },
  rowBtw: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  searchInput: {
    backgroundColor: "#1c1c1e",
    height: 35,
    borderRadius: 10,
    fontSize: 15,
    paddingHorizontal: 15,
    color: "white",
    marginBottom: 15,
  },
});
