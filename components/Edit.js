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
  AppRegistry
} from "react-native";
import Store from "../stores/store";
import { ScrollView, scrollViewHorizontal } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

class Edit extends Component {
  static navigationOptions = {
    title: "Edit Profile",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };

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
          <Text>nothing is here</Text>
        </View>
      );
    }
    if (Store.editProf.is_doctor) {
    }

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Row>
          <Text>waiting_time: </Text> <Text note>please enter HH:MM:SS</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="waiting_time"
            autoCapitalize="none"
            onChangeText={w => (waiting_time = w)}
          >
            <Text>{waiting_time}</Text>
          </Input>
        </Button>
        <Row>
          <Text>fees: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="fees"
            autoCapitalize="none"
            onChangeText={f => (fees = f)}
          >
            <Text>{Store.editProf.fees}</Text>
          </Input>
        </Button>
        <Row>
          <Text>opening_file: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="opening_file"
            autoCapitalize="none"
            onChangeText={o => (opening_file = o)}
          >
            <Text>{Store.editProf.opening_file}</Text>
          </Input>
        </Button>
        <Row>
          <Text>block: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="block"
            autoCapitalize="none"
            onChangeText={b => (block = b)}
          >
            <Text>{Store.editProf.block}</Text>
          </Input>
        </Button>
        <Row>
          <Text>street: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="street"
            autoCapitalize="none"
            onChangeText={s => (street = s)}
          >
            <Text>{Store.editProf.street}</Text>
          </Input>
        </Button>
        <Row>
          <Text>building: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="building"
            autoCapitalize="none"
            onChangeText={bu => (building = bu)}
          >
            <Text>{Store.editProf.building}</Text>
          </Input>
        </Button>
        <Row>
          <Text>floor: </Text> <Text note>please enter an integer</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="floor"
            autoCapitalize="none"
            onChangeText={f => (floor = f)}
          >
            <Text>{Store.editProf.floor}</Text>
          </Input>
        </Button>
        <Row>
          <Text>google_maps: </Text> <Text note>please enter a link</Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="google_maps"
            autoCapitalize="none"
            onChangeText={g => (google_maps = g)}
          >
            <Text>{Store.editProf.google_maps}</Text>
          </Input>
        </Button>
        <Row>
          <Text>description: </Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="description"
            autoCapitalize="none"
            onChangeText={e => this.handleChange(e)}
            value={Store.editProf.description}
          >
            <Text>{Store.editProf.description}</Text>
          </Input>
        </Button>
        <Row>
          <Text>service: </Text>
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
          <Input
            style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
            placeholder="service"
            autoCapitalize="none"
            onChangeText={se => (service = se)}
          >
            <Text>{Store.editProf.service}</Text>
          </Input>
        </Button>
        <Button
          style={{ backgroundColor: "#00bfff", marginBottom: 5, marginTop: 5 }}
          full
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.doctorName}>confirm</Text>
        </Button>
      </View>
    );
  }
}

export default observer(Edit);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  slide1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  },
  thumbnailStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center", // width: 40, // height: 40,
    position: "absolute"
  },
  userViewsText: {
    fontFamily: "GTWalsheim-Medium",
    fontSize: 10,
    color: "#919191",
    paddingTop: 5
  },
  iconsStyle: {
    width: 28,
    height: 28,
    justifyContent: "flex-start"
  },
  visitorsText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 12,
    color: "#919191"
  },
  textContainer: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  startStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  doctorName: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 25,
    color: "white"
  },
  doctordesc1: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 13,
    color: "#919191"
  },
  locationIcon: {
    color: "#48C1F6",
    paddingTop: 15
  },
  locationText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 15,
    color: "#605F5F"
  },
  BookingnowStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Black",
    fontSize: 15,
    color: "#919191",
    fontWeight: "bold"
  },
  bookingButton: {
    width: "25%",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: 5
  },
  ymenysarButtons: {
    color: "#48C1F6"
  },
  thirdText: {
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
  locationIcon: {
    color: "#48C1F6",
    fontSize: 38
  },
  cardStyle: {
    shadowColor: "rgba(0,0,0,0.7)",
    shadowRadius: 4,
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  clockIcon: {
    color: "#48C1F6",
    fontSize: 30
  }
});
