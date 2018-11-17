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

class anime1 extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("anime");
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          // alignSelf: 'center',
          alignContent: "center"
        }}
      >
        <Image
          source={require("../assets/WhiteLogo.png")}
          style={{
            justifyContent: "center",
            alignSelf: "center",
            alignContent: "center"
          }}
        />
      </View>
    );
  }
}

export default anime1;
