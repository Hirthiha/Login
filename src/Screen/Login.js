import React, {useState} from 'react';
import {View, Image, TextInput, Text, Pressable} from 'react-native';
import Style from '../Stylesheet/Style';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Password} from './Password';

export default function Login({navigation}) {
  const {passwordvisibility, rightIcon, handlePasswordVisibility} = Password();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkPasswordvalid, setCheckpasswordvalid] = useState(false);
  const [checkEmailvalid, setCheckemailvalid] = useState(false);

  //Email validation
  const handleCheckemail = text => {
    var emailcheck = /^[a-z0-9_\.]*[@][a-z]+[\.][a-z]{2,3}$/;
    setEmail(text);
    if (emailcheck.test(text)) {
      setCheckemailvalid(false);
    } else {
      setCheckemailvalid(true);
    }
  };
  //Password validation
  const handleCheckpassword = pass => {
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
      <View style={Style.loginview}>
        <Image style={Style.img} source={require('../assets/logo-og.png')} />
        <Text style={Style.welcome}>Welcome </Text>
        <TextInput
          style={Style.input}
          placeholder="Email"
          placeholderTextColor="lightgrey"
          value={email}
          onChangeText={text => handleCheckemail(text)}
        />
        {/* email error */}
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
            onChangeText={pass => handleCheckpassword(pass)}
          />
          <View style={Style.icon}>
            <Pressable onPress={handlePasswordVisibility}>
              <Icons name={rightIcon} color="black" size={20} />
            </Pressable>
          </View>
        </View>
        {/* Password error */}
        {checkPasswordvalid ? (
          <Text style={Style.error}>
            **Please enter password atleast 8 characters with number,special
            character, capital and small letters
          </Text>
        ) : (
          <Text style={Style.error}></Text>
        )}

        <Text style={Style.forgot}>Forgot your password?</Text>
        <Pressable>
          <Text style={Style.login} onPress={() => navigation.navigate('Home')}>
            Login
          </Text>
        </Pressable>
        <Text style={{marginTop: 10}}>
          Don't have an account?
          <Text
            style={{color: '#3399FF'}}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}
