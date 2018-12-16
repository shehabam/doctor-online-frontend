import React, { Component } from "react";
import { observer } from "mobx-react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  CustomIcon,
  Icon,
  View,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Right,
  Left,
  Footer
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import authStore from "../stores/authStore";

import {
  StyleSheet,
  TouchableHighlight,
  Image,
  AppRegistry
} from "react-native";
import Store from "../stores/store";
import { ScrollView, scrollViewHorizontal } from "react-native-gesture-handler";
import { withNamespaces } from "react-i18next";

class AppointmentPage extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t("appointment:title"),
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  });

  render() {
    const { t, i18n, navigation } = this.props;
    const checkSchedule = Store.findSchedule(Store.Bla());

    console.log(checkSchedule);
    if (!authStore.isAuthenticated) {
      return (
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text>{t("appointment:content")}</Text>
        </View>
      );
    }

    let dis = checkSchedule.map(Appointment => {
      return (
        <Grid
          key={Appointment.id}
          style={{
            backgroundColor: "white"
          }}
        >
          <Card style={{ width: "100%" }}>
            <CardItem>
              <Col>
                <Text style={styles.textCall}>{t("appointment:topic")}: </Text>
                <Text style={styles.text}>{Appointment.date}</Text>
                <Text style={styles.textCall}>
                  {t("appointment:from")}:
                </Text>{" "}
                <Text style={styles.text}>{Appointment._from}</Text>
                <Text style={styles.textCall}>{t("appointment:to")} </Text>{" "}
                <Text style={styles.text}>{Appointment.to}</Text>
                {/* <Text>with Doctor: {Appointment.doctor}</Text> */}
              </Col>
            </CardItem>
            <CardItem>
              <Right>
                <Button
                  onPress={() => Store.deleteAppointment(Appointment.id)}
                  transparent
                >
                  <Text style={styles.text}>{t("appointment:done")}</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Grid>
      );
    });

    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>{dis}</ScrollView>
      </View>
    );
  }
}

//export default observer(AppointmentPage);
export default withNamespaces(["appointment", "common"], { wait: true })(
  observer(AppointmentPage)
);

const styles = StyleSheet.create({
  text: {
    color: "#00bfff",
    fontSize: 20
  },
  textCall: {
    fontWeight: "bold",
    fontSize: 20
  }
});
