import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View,
  Thumbnail
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

class anime1 extends Component {
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
          backgroundColor: "white",
          justifyContent: "center",
          alignSelf: "center",
          // width: '100%',
          // height: '100%',
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

export default anime1;
