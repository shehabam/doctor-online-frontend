import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Right,
  Item,
  Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";
import SearchBar from "react-native-search-bar";
import { black } from "ansi-colors";

class SpecialityPage extends Component {
  render() {
    return (
      <Grid>
        <Row size={1} style={{ backgroundColor: "purple" }} />
        <Row size={1}>
          <Container>
            <Content>
              <Item>
                <Input
                  style={styles.inputStyle}
                  placeholder="Rounded Textbox"
                />
              </Item>
            </Content>
          </Container>
        </Row>

        <Row size={7}>
          <Col>
            <Card style={styles.cardBoxStyle}>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </Card>
          </Col>
          <Col>
            <Card style={styles.cardBoxStyle}>
              <Body>
                <Text>//Your text here</Text>
              </Body>
            </Card>
          </Col>
        </Row>

        <Row size={1} style={{ backgroundColor: "pink" }} />
      </Grid>
    );
  }
}

export default SpecialityPage;

const styles = StyleSheet.create({
  inputStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    height: 60,
    fontFamily: "GTWalsheim-Medium",
    color: "#54BEED",
    backgroundColor: "skyblue",
    flex: 1
  },
  cardBoxStyle: {
    marginLeft: 7,
    width: "93%",
    height: "25%",
    backgroundColor: "blue"
  }
});
