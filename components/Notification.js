import React, { Component } from "react";
import { observer } from "mobx-react";
import Store from "../stores/store";
import FooterApp from "./footer";
import { Theme } from "./Theme";
import { withNamespaces } from "react-i18next";
import { Permissions, Notifications } from "expo";
import registerForPushNotificationsAsync from "../utils/registerForPushNotificationsAsync";

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
  TextInput
} from "react-native";
import CollapsingToolbar from "react-native-collapse-view";
import authStore from "../stores/authStore";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.i18n.language
    };
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t("more:notification"),
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  });

  render() {
    const { t, i18n, navigation } = this.props;

    return (
      <ScrollView style={{ padding: 10 }}>
        <Text
          onPress={this._presentLocalNotificationAsync}
          title="notification immediately"
        />
        <Text>Push Notifications</Text>
        <Text onPress={this._sendNotificationAsync} title="Send me" />
      </ScrollView>
    );
  }

  _obtainUserFacingNotifPermissionsAsync = async () => {
    let permission = await Permissions.getAsync(
      Permissions.USER_FACING_NOTIFICATIONS
    );
    if (permission.status !== "granted") {
      permission = await Permissions.askAsync(
        Permissions.USER_FACING_NOTIFICATIONS
      );
      if (permission.status !== "granted") {
        Alert.alert(`We don't have permission to present notifications.`);
      }
    }
    return permission;
  };

  _obtainRemoteNotifPermissionsAsync = async () => {
    let permission = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (permission.status !== "granted") {
      permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (permission.status !== "granted") {
        Alert.alert(
          `We don't have permission to receive remote notifications.`
        );
      }
    }
    return permission;
  };

  _presentLocalNotificationAsync = async () => {
    await this._obtainUserFacingNotifPermissionsAsync();
    Notifications.presentLocalNotificationAsync({
      title: "Here is a local notification!",
      body: "This is the body",
      data: {
        hello: "there"
      },
      ios: {
        sound: true
      },
      android: {
        vibrate: true
      }
    });
  };

  _scheduleLocalNotificationAsync = async () => {
    await this._obtainUserFacingNotifPermissionsAsync();
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Here is a scheduled notifiation!",
        body: "This is the body",
        data: {
          hello: "there",
          future: "self"
        },
        ios: {
          sound: true
        },
        android: {
          vibrate: true
        }
      },
      {
        time: new Date().getTime() + 10000
      }
    );
  };

  _sendNotificationAsync = async () => {
    const permission = await this._obtainRemoteNotifPermissionsAsync();
    if (permission.status === "granted") {
      registerForPushNotificationsAsync().done();
    }
  };
}

// export default observer(Settings);
export default withNamespaces(["more", "common"], { wait: true })(Notification);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10
  }
});
