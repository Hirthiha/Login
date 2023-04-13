import React from "react";
import { Text, View } from "react-native";
import Style from "../Stylesheet/Style";

function Home() {
  return (
    <View style={Style.container}>
      <Text style={{ fontSize: 20 }}>Welcome</Text>
    </View>
  );
}
export default Home;
