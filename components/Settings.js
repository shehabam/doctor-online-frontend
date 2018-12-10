import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "../stores/store";
import FooterApp from "./footer";
import { Theme } from "./Theme";

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
  TextInput,
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
        </Picker>
      </View>
    );
  }
}

export default observer(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
    color: "black"
  }
});
