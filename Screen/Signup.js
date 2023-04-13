import React, { useState } from "react";
import { View, Image, Text, TextInput, Pressable } from "react-native";
import Style from "../Stylesheet/Style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Password } from "./Password";

export default function Signup({ navigation }) {
  const { passwordvisibility, rightIcon, handlePasswordVisibility } =
    Password();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkNamevalid, setChecknamevalid] = useState(false);
  const [checkEmailvalid, setCheckemailvalid] = useState(false);
  const [checkPasswordvalid, setCheckpasswordvalid] = useState(false);

  const handleCheckemail = (text) => {
    var emailcheck = /^[a-z0-9_\.]*[@][a-z]+[\.][a-z]{2,3}$/;
    setEmail(text);
    if (emailcheck.test(text)) {
      setCheckemailvalid(false);
    } else {
      setCheckemailvalid(true);
    }
  };

  const handleCheckname = (num) => {
    var namecheck = /^[A-Za-z\.  ]{1,30}$/;
    setName(num);
    if (namecheck.test(num)) {
      setChecknamevalid(false);
    } else {
      setChecknamevalid(true);
    }
  };

  const handleCheckpassword = (pass) => {
    var passwordcheck =
      /^(?=.*[0-9])(?=.*[!@#$%^&*._])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*._]{8,18}$/;
    setPassword(pass);
    if (passwordcheck.test(pass)) {
      setCheckpasswordvalid(false);
    } else {
      setCheckpasswordvalid(true);
    }
  };

  return (
    <View style={Style.container}>
      <Image
        style={Style.img}
        source={require("../assets/logo-og.png")}
      ></Image>
      <Text style={Style.welcome}>Create account</Text>
      <TextInput
        style={Style.input}
        placeholder="Name"
        placeholderTextColor="lightgrey"
        value={name}
        onChangeText={(num) => handleCheckname(num)}
      />
      {checkNamevalid ? (
        <Text style={Style.error}>**Please Enter a valid Name</Text>
      ) : (
        <Text style={Style.error}></Text>
      )}
      <TextInput
        style={Style.input}
        placeholder="Email"
        placeholderTextColor="lightgrey"
        value={email}
        onChangeText={(text) => handleCheckemail(text)}
      />
      {checkEmailvalid ? (
        <Text style={Style.error}>**Please Enter a valid Email</Text>
      ) : (
        <Text style={Style.error}></Text>
      )}

      <View style={Style.eye}>
        <TextInput
          style={Style.password}
          placeholder="Password"
          placeholderTextColor="lightgrey"
          secureTextEntry={passwordvisibility}
          value={password}
          onChangeText={(pass) => handleCheckpassword(pass)}
        />
        <View style={Style.icon}>
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialCommunityIcons
              name={rightIcon}
              size={22}
              color="#232323"
            />
          </Pressable>
        </View>
      </View>
      {checkPasswordvalid ? (
        <Text style={Style.error}>
          **Please enter password atleast 8 characters with number,special
          character, capital and small letters
        </Text>
      ) : (
        <Text style={Style.error}></Text>
      )}
      <Pressable>
        <Text style={Style.login} onPress={() => navigation.navigate("Home")}>
          SignUp
        </Text>
      </Pressable>
      <Text style={{ marginTop: 10 }}>
        Already have an account?{" "}
        <Text
          style={{ color: "#3399FF" }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
}
