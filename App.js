import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Root, Container } from "native-base";
import FirstPage from "./components/firstPage";
// import BottomTab from './components/BottomTab';
import BottomStack from "./components/BottomTab";
import LoginPage from "./components/loginPage";
import SearchByDoctor from "./components/SearchByDoctor";
import DoctorList from "./components/doctorList";
import { Col, Row, Grid } from "react-native-easy-grid";
import Area from "./components/Area";
import anime from "./components/animation";
import anime1 from "./components/animation1";
import FooterApp from "./components/footer";
import SpecialityPage from "./components/specialityPage";
import HomeScreen from "./components/HomeScreen";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DoctorProfile from "./components/doctorProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount() {
    try {
      await Expo.Font.loadAsync({
        "GTWalsheim-Medium": require("./assets/fonts/GT-Walsheim-Medium.ttf"),
        "GTWalsheim-Black": require("./assets/fonts/GT-Walsheim-Black.ttf")
      });
      this.setState({ fontLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.fontLoaded) {
      console.log("fonts loaded: ", this.state.fontLoaded);
      return (
        <Container>
          <RootStack />
        </Container>
      );
    } else {
      return (
        <View>
          <Text>loading</Text>
        </View>
      );
    }
  }
}

const RootStack = createStackNavigator(
  {
    anime1: anime1,
    anime: anime,
    FirstPage: FirstPage,
    SearchByDoctor: SearchByDoctor,
    LoginPage: LoginPage,
    Area: Area,
    SpecialityPage: SpecialityPage,
    DoctorList: DoctorList,
    DoctorProfile: DoctorProfile,
    FooterApp: FooterApp
  },
  {
    initialRouteName: "anime1"
  }
);
// const BottomStack = createBottomTabNavigator({
// 	HomeScreen: { screen: HomeScreen }
// 	// Settings: { screen: SettingsScreen },
// });

export default App;
