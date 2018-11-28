import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "../stores/store";
import FooterApp from "./footer";
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
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image,
  Picker
} from "react-native";
import CollapsingToolbar from "react-native-collapse-view";
import authStore from "../stores/authStore";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ""
    };
  }
  static navigationOptions = {
    title: "Settings",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };

  showMe(itemValue) {
    this.setState({ language: itemValue });
    console.log(this.state.language);
  }

  Edit() {
    if (authStore.isAuthenticated) {
      <ListItem onPress={() => this.props.navigation.navigate("FirstPage")}>
        <Left>
          <Icon name="md-person" large style={{ color: "#00bfff" }} />
          <Text>Edit my Profile</Text>
        </Left>
        <Right>
          <Icon name="arrow-forward" large style={{ color: "#00bfff" }} />
        </Right>
      </ListItem>;
    }
  }

  render() {
    // console.log(authStore.user.username);
    // console.log(Store.ProfileToEdit(authStore.user.username));
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TouchableHighlight>
          <List>
            {authStore.isAuthenticated ? (
              <ListItem onPress={() => this.props.navigation.navigate("Edit")}>
                <Left>
                  <Icon name="md-person" large style={{ color: "#00bfff" }} />
                  <Text>Edit my Profile</Text>
                </Left>
                <Right>
                  <Icon
                    name="arrow-forward"
                    large
                    style={{ color: "#00bfff" }}
                  />
                </Right>
              </ListItem>
            ) : (
              <ListItem>
                <Left>
                  <Text note>LogIn to Edit your profile</Text>
                </Left>
              </ListItem>
            )}
            <ListItem>
              <Left>
                <Icon name="md-globe" large style={{ color: "#00bfff" }} />
                <Text>Change my Country</Text>
              </Left>
              <Right>
                <Text style={{ fontSize: 13 }} note>
                  Coming Soon
                </Text>
              </Right>
            </ListItem>
          </List>
        </TouchableHighlight>
        {/* <Row> */}
        <Icon name="ios-globe-outline" large style={{ color: "#00bfff" }} />
        <Text>Change Language</Text>
        {/* </Row> */}
        <Picker
          selectedValue={this.state.language}
          style={{
            height: 50,
            width: 100,
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center"
          }}
          onValueChange={(itemValue, itemIndex) => this.showMe(itemValue)}
        >
          <Picker.Item label="English" value="EN" />
          <Picker.Item label="Arabic" value="AR" />
          <Picker.Item label="Spain" value="SP" />
          <Picker.Item label="Germany" value="GR" />
        </Picker>
      </View>
    );
  }
}

export default observer(Settings);
