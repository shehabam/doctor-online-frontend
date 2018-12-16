// import { TouchableOpacity, View, StyleSheet, DatePickerIOS } from 'react-native';
// import { observer } from 'mobx-react';
// import React, { Component } from 'react';
// import { Container, Content, Text } from 'native-base';
// class TimeDatePicker extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			chosenDate: new Date()
// 		};
// 		this.setDate = this.setDate.bind(this);
// 	}
// 	setDate(newDate) {
// 		this.setState({ chosenDate: newDate });
// 	}

// 	// setDate(newTime) {
// 	// 	this.setState({ chosenTime: newTime });
// 	// }

// 	showMeDate() {
// 		console.log(this.state.chosenDate.toString().substr(4, 12));
// 	}

// 	showMeTime() {
// 		console.log(this.state.chosenTime.toString().substr(4, 12));
// 	}
// 	render() {
// 		return (
// 			<Container>
// 				<Content>
// 					<DatePickerIOS
// 						date={this.state.chosenDate}
// 						time={this.state.chosenTime}
// 						defaultDate={new Date()}
// 						minimumDate={new Date()}
// 						maximumDate={new Date()}
// 						locale={'en'}
// 						minuteInterval={30}
// 						timeZoneOffsetInMinutes={undefined}
// 						modalTransparent={false}
// 						animationType={'fade'}
// 						androidMode={'default'}
// 						placeHolderText="Select Date and Time"
// 						textStyle={{ color: 'green' }}
// 						placeHolderTextStyle={{ color: '#d3d3d3' }}
// 						onDateChange={this.setDate}
// 					/>
// 					<Text>Date: {this.state.chosenDate.toString().substr(4, 12)}</Text>
// 					{this.showMeDate()}
// 				</Content>
// 			</Container>
// 		);
// 	}
// }

// export default observer(TimeDatePicker);

import React, { Component } from "react";
import {
  Button,
  Thumbnail,
  Card,
  Right,
  Left,
  CardItem,
  Body,
  list,
  ListItem,
  Content,
  Container
} from "native-base";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView
} from "react-native";
import Store from "../stores/store";
import { observer } from "mobx-react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { withNamespaces } from "react-i18next";
import authStore from "../stores/authStore";

let deviceWidth = Dimensions.get("window").width;
let scheduledata;

let booked_time = [];

class TimeDatePicker extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t("other:book"),
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  });

  constructor() {
    super();
    this.state = {
      day: "",
      month: "",
      auth_user: "",
      isDateTimePickerVisible: false,
      mode: "time",
      res: ""
    };
  }

  componentDidMount() {
    booked_time = [];
    let profileID = this.props.navigation.getParam("cat");
    let day_i = this.props.navigation.getParam("day");
    this.setState({
      auth_user: authStore.isAuthenticated,
      day: this.props.navigation.getParam("day"),
      month: this.props.navigation.getParam("month")
    });

    Store.bringToProfile(profileID);
    Store.getAppointments();

    for (let i = 0; i < scheduledata.length; i++) {
      if (
        day_i == scheduledata[i].date.slice(-2) &&
        Store.doctorProfile.id == scheduledata[i].doctor
      ) {
        switch (scheduledata[i].available_time) {
          case "9:00 AM":
            booked_time.push(1);
            break;
          case "9:20 AM":
            booked_time.push(2);
            break;
          case "9:40 AM":
            booked_time.push(3);
            break;

          case "10:00 AM":
            booked_time.push(4);
            break;
          case "10:20 AM":
            booked_time.push(5);
            break;
          case "10:40 AM":
            booked_time.push(6);
            break;

          case "11:00 AM":
            booked_time.push(7);
            break;
          case "11:20 AM":
            booked_time.push(8);
            break;
          case "11:40 AM":
            booked_time.push(9);
            break;

          case "12:00 AM":
            booked_time.push(10);
            break;
          case "12:20 AM":
            booked_time.push(11);
            break;
          case "12:40 AM":
            booked_time.push(12);
            break;

          case "1:00 PM":
            booked_time.push(13);
            break;
          case "1:20 PM":
            booked_time.push(14);
            break;
          case "1:40 PM":
            booked_time.push(15);
            break;

          case "2:00 PM":
            booked_time.push(16);
            break;
          case "2:20 PM":
            booked_time.push(17);
            break;
          case "2:40 PM":
            booked_time.push(18);
            break;

          case "3:00 PM":
            booked_time.push(19);
            break;
          case "3:20 PM":
            booked_time.push(20);
            break;
          case "3:40 PM":
            booked_time.push(21);
            break;

          case "4:00 PM":
            booked_time.push(22);
            break;
          case "4:20 PM":
            booked_time.push(23);
            break;
          case "4:40 PM":
            booked_time.push(24);
            break;

          case "5:00 PM":
            booked_time.push(25);
            break;
          case "5:20 PM":
            booked_time.push(26);
            break;
          case "5:40 PM":
            booked_time.push(27);
            break;

          case "6:00 PM":
            booked_time.push(28);
            break;
          case "6:20 PM":
            booked_time.push(29);
            break;
          case "6:40 PM":
            booked_time.push(30);
            break;

          case "7:00 PM":
            booked_time.push(31);
            break;
          case "7:20 PM":
            booked_time.push(32);
            break;
          case "7:40 PM":
            booked_time.push(33);
            break;

          case "8:00 PM":
            booked_time.push(34);
            break;
          case "8:20 PM":
            booked_time.push(35);
            break;
          case "8:40 PM":
            booked_time.push(36);
            break;
          default:
            break;
        }
      }
    }
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _showTimeInTimePicker = () =>
    this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = SelectedDate => {
    console.log("A date has been picked: ", SelectedDate);
    this.setState({ res: SelectedDate.toString().slice(0, -15) });
    this._hideDateTimePicker();
  };

  _handleTimePicked = SelectedTime => {
    console.log("A time has been picked: ", SelectedTime);
    this._hideDateTimePicker();
  };

  _reservation = SelectedDate => {
    console.log("-------------------------: ", SelectedDate);
    this.setState({ res: SelectedDate });
  };

  render() {
    const { t, i18n, navigation } = this.props;
    const { day, month, auth_user } = this.state;

    scheduledata = Store.AppointmentsList;

    if (!Store.doctorProfile) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignContent: "center",
            // alignSelf: 'center',
            justifyContent: "center"
          }}
        >
          <Text style={{ alignSelf: "center" }}>{t("other:loading")}</Text>
        </View>
      );
    }

    return (
      <View style={styles.DateTimePickerStyle}>
        <Card
          style={{
            alignItems: "center",
            width: "97%",
            padding: 5,
            borderRadius: 4
          }}
        >
          <Thumbnail
            style={styles.thumbnailStyle}
            large
            source={{ uri: Store.doctorProfile.img }}
          />
          <Text>
            {t("other:doctor")}: {Store.doctorProfile.user.first_name}{" "}
            {Store.doctorProfile.user.last_name}
          </Text>
          <Text note>
            {t("other:profession")}: {Store.doctorProfile.profession}{" "}
          </Text>
          <Text>
            {t("other:yourreservationis")}: {this.state.res}
          </Text>
          <Text>
            {t("other:reservationday")}: {month}-{day}
          </Text>

          {/* <Text note>Doctor: {Store.doctorProfile.id} </Text> */}
          {/* {auth_user ? (
            <Text note>Me: {authStore.user.user_id} </Text>
          ) : (
            <Text>Not logged!</Text>
          )} */}
        </Card>

        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="9:00 AM"
              auth_user={auth_user}
              color={booked_time.includes(1) ? "booked" : null}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="9:20 AM"
              auth_user={auth_user}
              color={booked_time.includes(2) ? "booked" : null}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="9:40 AM"
              color={booked_time.includes(3) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="10:00 AM"
              color={booked_time.includes(4) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="10:20 AM"
              color={booked_time.includes(5) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="10:40 AM"
              color={booked_time.includes(6) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="11:00 AM"
              color={booked_time.includes(7) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="11:20 AM"
              color={booked_time.includes(8) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="11:40 AM"
              color={booked_time.includes(9) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="12:00 AM"
              color={booked_time.includes(10) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="12:20 AM"
              color={booked_time.includes(11) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="12:40 AM"
              color={booked_time.includes(12) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="1:00 PM"
              color={booked_time.includes(13) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="1:20 PM"
              color={booked_time.includes(14) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="1:40 PM"
              color={booked_time.includes(15) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="2:00 PM"
              color={booked_time.includes(16) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="2:20 PM"
              color={booked_time.includes(17) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="2:40 PM"
              color={booked_time.includes(18) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="3:00 PM"
              color={booked_time.includes(19) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="3:20 PM"
              color={booked_time.includes(20) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="3:40 PM"
              color={booked_time.includes(21) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="4:00 PM"
              color={booked_time.includes(22) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="4:20 PM"
              color={booked_time.includes(23) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="4:40 PM"
              color={booked_time.includes(24) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="5:00 PM"
              color={booked_time.includes(25) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="5:20 PM"
              color={booked_time.includes(26) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="5:40 PM"
              auth_user={auth_user}
              color={booked_time.includes(27) ? "booked" : null}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="6:00 PM"
              color={booked_time.includes(28) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="6:20 PM"
              color={booked_time.includes(29) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="6:40 PM"
              color={booked_time.includes(30) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="7:00 PM"
              color={booked_time.includes(31) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="7:20 PM"
              color={booked_time.includes(32) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="7:40 PM"
              color={booked_time.includes(33) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="8:00 PM"
              color={booked_time.includes(34) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="8:20 PM"
              color={booked_time.includes(35) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
            <TimeButton
              time="8:40 PM"
              color={booked_time.includes(36) ? "booked" : null}
              auth_user={auth_user}
              day={day}
              month={month}
              t={t}
            />
          </View>
        </ScrollView>
        {/* <Container>
          <TouchableOpacity onPress={this._showDateTimePicker}>
            <Text style={styles.secondText}>{t("other:showdatepicker")}</Text>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              mode={this.state.mode}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </TouchableOpacity>
        </Container>
        {this.state.res ? (
          <Container>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              Available Time
            </Text>
            <Text style={{ textAlign: "center", marginBottom: 10 }}>
              {this.state.res}
            </Text>
            <Button onPress={() => this._reservation} full rounded>
              <Text style={styles.firstText}>{t("other:confirm")}</Text>
            </Button>
          </Container>
        ) : null} */}
      </View>
    );
  }
}

// export default observer(TimeDatePicker);
export default withNamespaces(["other", "common"], { wait: true })(
  TimeDatePicker
);

class TimeButton extends Component {
  render() {
    const { time, color, month, day, auth_user, t } = this.props;

    return (
      <TouchableOpacity
        onPress={() => {
          auth_user
            ? (Store.postBook(
                month + " - " + day,
                time,
                Store.doctorProfile.id,
                authStore.user.user_id
              ),
              alert(t("other:bookedsuccess")))
            : alert(t("other:pleaselogin"));
        }}
        style={[styles.time, { backgroundColor: color ? "grey" : "#026fc9" }]}
      >
        <Text style={styles.texttime}>{time}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  time: {
    height: 45,
    backgroundColor: "#026fc9",
    borderRadius: 10,
    justifyContent: "center",
    width: deviceWidth / 3.6,
    margin: 5,
    alignItems: "center"
  },
  texttime: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    textDecorationLine: "underline"
  },
  DateTimePickerStyle: {
    // alignSelf: 'center',
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
    padding: 10
  },
  thumbnailStyle: {
    // alignSelf: 'center',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
    // flex: 1
  },
  firstText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#fff"
  },
  secondText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  }
  // thirdText: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontSize: 16,
  //   fontFamily: "GTWalsheim-Medium",
  //   color: "#919191"
  // },
  // locationIcon: {
  //   color: "#48C1F6"
  // },
  // fourthText: {
  //   fontSize: 16,
  //   fontFamily: "GTWalsheim-Medium",
  //   color: "#919191",
  //   paddingLeft: 5
  // },
  // iconsStyle: {
  //   width: 28,
  //   height: 28
  // },
  // bookingButtonCardItem: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   backgroundColor: "white"
  // },
  // bookingButton: {
  //   // height: 30,
  //   // width: 140,
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center"
  // },
  // buttonText: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontSize: 14,
  //   fontFamily: "GTWalsheim-Medium"
  // }
});

{
  /* <TouchableOpacity onPress={this._showTimeInTimePicker}>
						<Text style={styles.secondText}>Show TimePicker</Text>
						<DateTimePicker
							isVisible={this.state.isDateTimePickerVisible}
							mode={this.state.mode}
							onConfirm={this._handleTimePicked}
							onCancel={this._hideDateTimePicker}
						/>
					</TouchableOpacity> */
}
