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

class AppointmentPage extends Component {
  static navigationOptions = {
    title: "Appointments",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };

  componentDidMount() {
    if (authStore.isAuthenticated) {
      const userID = authStore.user;
      //  console.log(userID)
      console.log(
        "--------------------------------------------------------------"
      );
    } else {
      console.log("login");
    }
  }

  render() {
    // const userUsername = Store.findUser(authStore.user.username)
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
          <Text> Login to see your appointments</Text>
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
                <Text style={styles.textCall}>
                  You Have an appointment in:{" "}
                </Text>
                <Text style={styles.text}>{Appointment.date}</Text>
                <Text style={styles.textCall}>From:</Text>{" "}
                <Text style={styles.text}>{Appointment._from}</Text>
                <Text style={styles.textCall}>to </Text>{" "}
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
                  <Text style={styles.text}>Done</Text>
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

export default observer(AppointmentPage);

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
