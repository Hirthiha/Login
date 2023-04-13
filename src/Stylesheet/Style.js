import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 100,
    height: 100,
  },

  inside: {
    width: 400,
    height: 400,
    alignItems: 'center',
    marginTop: 180,
  },

  login: {
    marginTop: 10,
    marginRight: 20,
    width: 240,
    height: 39,
    color: 'white',
    backgroundColor: '#3399FF',
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
  },

  signup: {
    marginTop: 10,
    width: 240,
    marginRight: 20,
    height: 39,
    color: '#3399FF',
    textAlign: 'center',
    paddingTop: 10,
    borderColor: 'grey',
    borderWidth: 2,
    fontWeight: 'bold',
  },

  input: {
    marginTop: 10,
    marginRight: 20,
    width: 240,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingLeft: 5,
  },

  password: {
    marginTop: 10,
    width: 240,
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 2,
    paddingLeft: 5,
  },

  loginview: {
    width: 400,
    height: 500,
    alignItems: 'center',
    marginTop: 115,
  },

  forgot: {
    marginLeft: 100,
    fontSize: 12,
    marginTop: 5,
  },

  welcome: {
    color: '#3399FF',
    marginTop: 10,
    fontWeight: 'bold',
  },

  eye: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    position: 'relative',
    right: 30,
    top: 5,
  },

  error: {
    color: 'red',
    marginRight: 60,
  },
});

export default Style;
