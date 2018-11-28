import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "../stores/store";
import { Theme } from "./Theme";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  List,
  View,
  Icon,
  ListItem,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Right,
  Left
} from "native-base";
import FooterApp from "./footer";

import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";
import CollapsingToolbar from "react-native-collapse-view";
import authStore from "../stores/authStore";

class More extends Component {
  static navigationOptions = {
    title: "More",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };

  render() {
    console.log(this.props.onLogoutPress);

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TouchableHighlight>
          <List>
            <ListItem
              onPress={() => this.props.navigation.navigate("Settings")}
            >
              <Left>
                <Icon name="md-settings" large style={{ color: "#00bfff" }} />
                <Text>Settings</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" large style={{ color: "#00bfff" }} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-call" large style={{ color: "#00bfff" }} />
                <Text>Contact Us</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" large style={{ color: "#00bfff" }} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="md-bulb" large style={{ color: "#00bfff" }} />
                <Text>About Us</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" large style={{ color: "#00bfff" }} />
              </Right>
            </ListItem>
            <ListItem onPress={() => authStore.logoutUser()}>
              <Left>
                <Icon name="log-out" large style={{ color: "#00bfff" }} />
                <Text>LogOut</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" large style={{ color: "#00bfff" }} />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-glasses" large style={{ color: "#00bfff" }} />
                <Text>medical information</Text>
              </Left>
              <Right>
                <Text style={{ fontSize: 13 }} note>
                  Coming Soon
                </Text>
              </Right>
            </ListItem>
          </List>
        </TouchableHighlight>
        {/* <FooterApp /> */}
      </View>
    );
  }
}

export default observer(More);
