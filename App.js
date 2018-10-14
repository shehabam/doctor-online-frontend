import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DoctorsList from "./components/doctorList";
import { Root } from "native-base";
import FirstPage from "./components/firstPage";
import LoginPage from "./components/loginPage";
import DoctorList from "./components/doctorList";
import SpecialityPage from "./components/specialityPage";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import DoctorProfile from "./components/doctorProfile";

export default class App extends React.Component {
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
      console.log("fonts are loaded");
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    if (this.state.fontLoaded) {
      console.log("fonts loaded: ", this.state.fontLoaded);
      return <FirstPage />;
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
    DoctorList: DoctorList
  },
  {
    initialRouteName: "FirstPage"
  }
);

// const BottomTabBar = createBottomTabNavigator({
//   FirstPage: {
//     screen: FirstPage,
//     navigationOptions: {
//       tabBarLabel: "FirstPage",
//       tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={24} />
//     }
//   },
//   LoginPage: { screen: LoginPage }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
