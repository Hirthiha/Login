import React from "react";
import { Text, View, Image, TextInput, Pressable } from "react-native";
import Style from "../Stylesheet/Style";

export default function Main({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.inside}>
        <Image
          style={Style.img}
          source={require("../assets/logo-og.png")}
        ></Image>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={Style.login}>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={Style.signup}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
}
