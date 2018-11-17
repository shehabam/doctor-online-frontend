import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";

class TabBottom extends Component {
  render() {
    // if (this.state.fontLoaded) {
    return <BottomStack />;
    // }
    // else {
    // 	return (
    // 		<View>
    // 			<Text>loading</Text>
    // 		</View>
    // 	);
    // }
  }
}
export default TabBottom;

const BottomStack = createBottomTabNavigator({
  HomeScreen: { screen: HomeScreen }
  // Settings: { screen: SettingsScreen },
});

// class SettingsScreen extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Settings!</Text>
//             </View>
//             );
//         }
//     }
