import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Root } from "native-base";
import FirstPage from "./components/firstPage";
import LoginPage from "./components/loginPage";
import DoctorList from "./components/doctorList";
import Area from "./components/Area";
import anime from "./components/animation";
import anime1 from "./components/animation1";
import SpecialityPage from "./components/specialityPage";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DoctorProfile from "./components/doctorProfile";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";

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
      return <RootStack />;
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
    FirstPage: FirstPage,
    LoginPage: LoginPage,
    DoctorList: DoctorList,
    Area: Area,
    DoctorProfile: DoctorProfile,
    SpecialityPage: SpecialityPage,
    anime: anime,
    anime1: anime1
  },
  {
    initialRouteName: "DoctorList"
  }
);

export default App;
