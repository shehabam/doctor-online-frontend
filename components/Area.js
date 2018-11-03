import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "../stores/store";
// import Icon from 'react-native-vector-icons/EvilIcons';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  View,
  Icon,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Right,
  Left
} from "native-base";
// import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, ScrollView } from "react-native";

class Area extends Component {
  static navigationOptions = {
    title: "Choose Your Area",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };
  render() {
    if (!Store.Areas) return <View />;

    let listOfAreas = Store.Areas.map(list => (
      <TouchableHighlight key={list.id}>
        <Card onPress={() => alert("hello World")}>
          <CardItem>
            <Left>
              <Text>{list.name}</Text>
            </Left>
            <Right>
              <Icon type="EvilIcons" name="chevron-right" />
            </Right>
          </CardItem>
        </Card>
      </TouchableHighlight>
    ));

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        {listOfAreas}
      </ScrollView>
    );
  }
}

export default observer(Area);

const styles = StyleSheet.create({
  thumbnailStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  firstText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#54BEED"
  },
  secondText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
  thirdText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
  locationIcon: {
    color: "#48C1F6"
  },
  fourthText: {
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191",
    paddingLeft: 5
  },
  iconsStyle: {
    width: 28,
    height: 28
  },
  bookingButtonCardItem: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  bookingButton: {
    height: 30,
    width: 140,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  buttonText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 14,
    fontFamily: "GTWalsheim-Medium"
  }
});
