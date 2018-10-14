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

class LoginPage extends Component {
  render() {
    return (
      <Grid>
        <Row style={{ backgroundColor: "transparent" }} size={1} />
        <Row size={2.5}>
          <Image
            source={require("../images/logo.png")}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </Row>
      </Grid>
    );
  }
}

export default LoginPage;
