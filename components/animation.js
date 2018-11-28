import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

class anime extends Component {
  static navigationOptions = {
    header: null,
    Style: {
      backgroundColor: "#00bfff"
    },
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "blue"
      }
    }
  };

  static tabBarOptions = {
    tabBarVisible: false,
    activeTintColor: "white",
    inactiveTintColor: "black"
  };

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("FirstPage");
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          // alignSelf: 'center',
          alignContent: "center"
        }}
      >
        <Image
          source={require("../assets/colorfulLogo.png")}
          style={{
            // flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            width: 420,
            height: 320,
            alignContent: "center"
          }}
        />
      </View>
    );
  }
}

export default anime;
