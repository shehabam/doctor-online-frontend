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
  Input,
  Footer
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  TextInput,
  AppRegistry,
  ScrollView
} from "react-native";
import Store from "../stores/store";
import { scrollViewHorizontal } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { withNamespaces } from "react-i18next";

class Edit extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t("settings:editprofile"),
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  });
  constructor(props) {
    super(props);
    this.state = {
      // waiting_time: '',
      // fees: '',
      // opening_file: '',
      // block: '',
      // street: '',
      // building: '',
      // floor: '',
      // google_maps: '',
      descriptionValue: ""
      // service: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ descriptionValue: event });
  }

  handleSubmit(event) {
    const ID = this.props.navigation.getParam("cat");
    const description = this.state.descriptionValue;
    Store.EditProfile(ID, description);
  }

  componentDidMount() {
    let profileID = this.props.navigation.getParam("cat");
    Store.getEditProfile(profileID);
  }

  render() {
    const { t, i18n, navigation } = this.props;

    let waiting_time = Store.editProf.waiting_time;
    let fees = Store.editProf.fees;
    let opening_file = Store.editProf.opening_file;
    let block = Store.editProf.block;
    let street = Store.editProf.street;
    let building = Store.editProf.building;
    let floor = Store.editProf.floor;
    let google_maps = Store.editProf.google_maps;
    let description = Store.editProf.description;
    let service = Store.editProf.service;
    if (!Store.editProf) {
      return (
        <View>
          <Text>{t("edit:nothing")}</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Row>
            <Text>{t("edit:waitingtime")}</Text>
            <Text note>{t("edit:enterdate")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:waitingtime")}
              autoCapitalize="none"
              onChangeText={w => (waiting_time = w)}
            >
              <Text>{waiting_time}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:fees")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:fees")}
              autoCapitalize="none"
              onChangeText={f => (fees = f)}
            >
              <Text>{Store.editProf.fees}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:openingfile")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:openingfile")}
              autoCapitalize="none"
              onChangeText={o => (opening_file = o)}
            >
              <Text>{Store.editProf.opening_file}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:block")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:block")}
              autoCapitalize="none"
              onChangeText={b => (block = b)}
            >
              <Text>{Store.editProf.block}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:street")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:street")}
              autoCapitalize="none"
              onChangeText={s => (street = s)}
            >
              <Text>{Store.editProf.street}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:building")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:building")}
              autoCapitalize="none"
              onChangeText={bu => (building = bu)}
            >
              <Text>{Store.editProf.building}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:floor")}: </Text>
            <Text note>{t("edit:enterint")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "50%",
              height: "5%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:150, height: 40, marginLeft:10 }}
              placeholder={t("edit:floor")}
              autoCapitalize="none"
              onChangeText={f => (floor = f)}
            >
              <Text>{Store.editProf.floor}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:googlemaps")}: </Text>
            <Text note>{t("edit:enterlink")}</Text>
          </Row>
          <Button
            rounded
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "100%",
              height: "4%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:300, height: 40, marginLeft:10 }}
              placeholder={t("edit:googlemaps")}
              autoCapitalize="none"
              onChangeText={g => (google_maps = g)}
            >
              <Text>{Store.editProf.google_maps}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:description")}: </Text>
          </Row>
          <Button
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "100%",
              height: "10%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:300, height: 40, marginLeft:10 }}
              placeholder={t("edit:description")}
              autoCapitalize="none"
              multiline = {true}
              numberOfLines = {4}
              onChangeText={e => this.handleChange(e)}
              value={Store.editProf.description}
            >
              <Text>{Store.editProf.description}</Text>
            </TextInput>
          </Button>
          <Row>
            <Text>{t("edit:service")}: </Text>
          </Row>
          <Button
            transparent
            style={{
              borderWidth: 1,
              borderColor: "gray",
              width: "100%",
              height: "10%"
            }}
          >
            <TextInput
              style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20, width:300, height: 40, marginLeft:10 }}
              placeholder={t("edit:service")}
              autoCapitalize="none"
              multiline = {true}
              numberOfLines = {4}
              onChangeText={se => (service = se)}
            >
              <Text>{Store.editProf.service}</Text>
            </TextInput>
          </Button>
          <Button
            style={{
              backgroundColor: "#00bfff",
              marginBottom: 5,
              marginTop: 5
            }}
            full
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.doctorName}>{t("edit:confirm")}</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

// export default observer(Edit);
export default withNamespaces(["edit", "common"], { wait: true })(Edit);
const styles = StyleSheet.create({
  // wrapper: {
  //   marginTop: 80
  // },
  // slide1: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#9DD6EB"
  // },
  // slide2: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#97CAE5"
  // },
  // slide3: {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#92BBD9"
  // },
  // text: {
  //   color: "#000",
  //   fontSize: 20,
  //   fontWeight: "bold"
  // },
  // thumbnailStyle: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center", // width: 40, // height: 40,
  //   position: "absolute"
  // },
  // userViewsText: {
  //   fontFamily: "GTWalsheim-Medium",
  //   fontSize: 10,
  //   color: "#919191",
  //   paddingTop: 5
  // },
  // iconsStyle: {
  //   width: 28,
  //   height: 28,
  //   justifyContent: "flex-start"
  // },
  // visitorsText: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontFamily: "GTWalsheim-Medium",
  //   fontSize: 12,
  //   color: "#919191"
  // },
  // textContainer: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center"
  // },
  // startStyle: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center"
  // },
  doctorName: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 25,
    color: "white"
  }
  // doctordesc1: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontFamily: "GTWalsheim-Medium",
  //   fontSize: 13,
  //   color: "#919191"
  // },
  // locationIcon: {
  //   color: "#48C1F6",
  //   paddingTop: 15
  // },
  // locationText: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontFamily: "GTWalsheim-Medium",
  //   fontSize: 15,
  //   color: "#605F5F"
  // },
  // BookingnowStyle: {
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   fontFamily: "GTWalsheim-Black",
  //   fontSize: 15,
  //   color: "#919191",
  //   fontWeight: "bold"
  // },
  // bookingButton: {
  //   width: "25%",
  //   alignSelf: "center",
  //   alignContent: "center",
  //   justifyContent: "center",
  //   margin: 5
  // },
  // ymenysarButtons: {
  //   color: "#48C1F6"
  // },
  // thirdText: {
  //   fontSize: 16,
  //   fontFamily: "GTWalsheim-Medium",
  //   color: "#919191"
  // },
  // locationIcon: {
  //   color: "#48C1F6",
  //   fontSize: 38
  // },
  // cardStyle: {
  //   shadowColor: "rgba(0,0,0,0.7)",
  //   shadowRadius: 4,
  //   shadowOpacity: 0.7,
  //   shadowOffset: {
  //     height: 2,
  //     width: 0
  //   }
  // },
  // clockIcon: {
  //   color: "#48C1F6",
  //   fontSize: 30
  // }
});
