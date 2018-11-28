import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Root, Container, Icon } from "native-base";
import FirstPage from "./components/firstPage";
// import BottomTab from './components/BottomTab';
import BottomStack from "./components/BottomTab";
import LoginPage from "./components/loginPage";
import SearchByDoctor from "./components/SearchByDoctor";
import DoctorList from "./components/doctorList";
import More from "./components/More";
import TimeDatePicker from "./components/TimeDatePicker";
import Settings from "./components/Settings";
import { Col, Row, Grid } from "react-native-easy-grid";
import Area from "./components/Area";
import Edit from "./components/Edit";
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
import EditProfile from "./components/EditProfile";

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
          <BottomTab />
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

const AnimeTab = createStackNavigator(
  {
    anime1: {
      screen: anime1,
      navigationOptions: {
        header: null
      },
      hideTabBar: true
    },
    anime: anime
  },
  {}
);

const FirstPageTab = createStackNavigator(
  {
    FirstPage: FirstPage,
    SearchByDoctor: SearchByDoctor,
    LoginPage: LoginPage,
    Area: Area,
    SpecialityPage: SpecialityPage,
    DoctorList: DoctorList,
    Edit: Edit,
    DoctorProfile: DoctorProfile,
    TimeDatePicker: {
      screen: TimeDatePicker,
      navigationOptions: {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#00bfff"
        }
      }
    },
    EditProfile: EditProfile
  },
  {
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#90d4ed"
      },
      headerTextStyle: {
        fontWeight: "bold"
      },
      hideTabBar: true
    }
  }
);

const MoreTab = createStackNavigator(
  {
    More: More,
    Settings: Settings,
    EditProfile: EditProfile,
    Edit: Edit
  },
  {}
);
const AppointmentTab = createStackNavigator(
  {
    More: More,
    Settings: Settings,
    EditProfile: EditProfile
  },
  {}
);
const OffersTab = createStackNavigator(
  {
    More: More,
    Settings: Settings,
    EditProfile: EditProfile
  },
  {}
);

const BottomTab = createBottomTabNavigator(
  {
    Home: FirstPageTab,
    Appointment: AppointmentTab,
    Offers: OffersTab,
    More: MoreTab,
    Anime: AnimeTab
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "search";
        } else if (routeName === "Appointment") {
          iconName = "calendar";
        } else if (routeName === "Offers") {
          iconName = "bullhorn";
        } else if (routeName === "More") {
          iconName = "ellipsis-h";
        }
        return (
          <Icon
            name={iconName}
            style={{ color: tintColor }}
            type="FontAwesome"
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "#00bfff"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

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
    More: More,
    Settings: Settings,
    TimeDatePicker: TimeDatePicker,
    EditProfile: EditProfile
  },
  {
    initialRouteName: "anime1"
  }
);

export default App;
