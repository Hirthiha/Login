import React from "react";
import { View, Text, FlatList } from "react-native";
const kavi = () => {
  const frame = [
    {
      id: 1,
      title: "Aishu",
      img: require("../assets/tree.png"),
    },
    {
      id: 2,
      title: "kavi",
      img: require("../assets/tree.png"),
    },
    {
      id: 3,
      title: "suji",
      img: require("../assets/tree.png"),
    },
  ];
  return (
    <View>
      <FlatList
        data={frame}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
export default kavi;
