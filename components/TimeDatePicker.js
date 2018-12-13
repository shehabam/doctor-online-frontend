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

class TimeDatePicker extends Component {
  state = {
    day: "",
    month: "",
    auth_user: ""
  };

  componentDidMount() {
    let profileID = this.props.navigation.getParam("cat");

    this.setState({
      auth_user: authStore.isAuthenticated,
      day: this.props.navigation.getParam("day"),
      month: this.props.navigation.getParam("month")
    });

    Store.bringToProfile(profileID);
    Store.getAppointments();
  }

  state = {
    isDateTimePickerVisible: false,
    mode: "time",
    res: ""
  };

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

    let scheduledata = Store.AppointmentsList;
    console.log("~~~~~~~~~~~~~~~~~~~~~~~", scheduledata);

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
            Doctor: {Store.doctorProfile.user.first_name}{" "}
            {Store.doctorProfile.user.last_name}
          </Text>
          <Text note>profession: {Store.doctorProfile.profession} </Text>
          <Text>your reservation is: {this.state.res}</Text>
          <Text>
            Reservation Day: {month}-{day}
          </Text>

          <Text note>Doctor: {Store.doctorProfile.id} </Text>
          {auth_user ? (
            <Text note>Me: {authStore.user.user_id} </Text>
          ) : (
            <Text>Not logged!</Text>
          )}
        </Card>

        <ScrollView>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="9:00 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="9:20 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="9:40 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="10:00 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="10:20 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="10:40 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="11:00 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="11:20 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="11:40 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="12:00 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="12:20 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="12:40 AM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="1:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="1:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="1:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="2:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="2:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="2:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="3:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="3:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="3:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="4:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="4:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="4:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="5:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="5:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="5:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="6:00 PM"
              color="green"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="6:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="6:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="7:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="7:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="7:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TimeButton
              time="8:00 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="8:20 PM"
              auth_user={auth_user}
              day={day}
              month={month}
            />
            <TimeButton
              time="8:40 PM"
              auth_user={auth_user}
              day={day}
              month={month}
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
    const { time, color, month, day, auth_user } = this.props;

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
              alert("Booked Successfully!"))
            : alert("Please login!");
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
