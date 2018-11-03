import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Body,
  Left
} from "native-base";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";
import { colors } from "react-native-elements";

class FooterApp extends Component {
  render() {
    return (
      <Footer>
        <Row>
          <Col style={styles.inputStyle}>
            <Icon style={styles.ImageStyle} name="search" />
            <Text style={styles.ImageStyle}>Search</Text>
          </Col>
          <Col style={styles.inputStyle}>
            <Icon style={styles.ImageStyle} name="camera" />
            <Text style={styles.ImageStyle}>Camera</Text>
          </Col>
          <Col style={styles.inputStyle}>
            <Icon style={styles.ImageStyle} name="navigate" />
            <Text style={styles.ImageStyle}>Navigate</Text>
          </Col>
          <Col style={styles.inputStyle}>
            <Icon style={styles.ImageStyle} name="person" />
            <Text style={styles.ImageStyle}>Contact</Text>
          </Col>
        </Row>
      </Footer>
    );
  }
}

export default FooterApp;

const styles = StyleSheet.create({
  inputStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
    // fontSize: 22,
    // height: 60,
    // fontFamily: 'GTWalsheim-Medium',
    // color: '#ffffff',
    // backgroundColor: '#00bfff',
    // flex: 1
  },
  ImageStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    color: "gray"
    // height: 60,
    // backgroundColor: '#00bfff',
    // flex: 1
  },
  cardBoxStyle: {
    marginLeft: 7,
    width: 190,
    height: 150,
    backgroundColor: "#00bfff"
  }
});
