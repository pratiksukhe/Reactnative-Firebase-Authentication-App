import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from "firebase";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import all screens
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDMa2RmjnSuqimx04UwVBOK7tWIySq0y5s",
  authDomain: "rnfirebaseapp-c95ca.firebaseapp.com",
  databaseURL: "https://rnfirebaseapp-c95ca.firebaseio.com",
  projectId: "rnfirebaseapp-c95ca",
  storageBucket: "rnfirebaseapp-c95ca.appspot.com",
  messagingSenderId: "186543362939"
};
firebase.initializeApp(config);

const MainNavigator = createStackNavigator({
    Loading: {screen: LoadingScreen},
    SignIn: {screen: SigninScreen},
    SignUp: {screen: SignupScreen},
    Home: {screen: HomeScreen}
}, {
  //launcher screen
  initialRouteName: "Loading"
}
);

//create app container
const App = createAppContainer(MainNavigator);
export default App;
