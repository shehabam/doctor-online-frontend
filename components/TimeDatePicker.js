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

import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Store from "../stores/store";
import { observer } from "mobx-react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { withNamespaces } from "react-i18next";

class TimeDatePicker extends Component {
  componentDidMount() {
    let profileID = this.props.navigation.getParam("cat");
    Store.bringToProfile(profileID);
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
        <Container>
          <Card style={{ alignSelf: "center", width: 400 }}>
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
          </Card>
        </Container>
        <Container>
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
        <Container>
          <Button onPress={() => this._reservation} full rounded>
            <Text style={styles.firstText}>{t("other:confirm")}</Text>
          </Button>
        </Container>
      </View>
    );
  }
}

// export default observer(TimeDatePicker);
export default withNamespaces(["other", "common"], { wait: true })(
  TimeDatePicker
);

const styles = StyleSheet.create({
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
    alignContent: "center",
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
