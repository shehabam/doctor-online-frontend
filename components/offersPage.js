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
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  AppRegistry
} from "react-native";
import Store from "../stores/store";
import { ScrollView, scrollViewHorizontal } from "react-native-gesture-handler";

class offersPage extends Component {
  static navigationOptions = {
    title: "Offers",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };
  render() {
    if (!Store.offersPics) {
      return (
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >

          <Text> There is no Offers</Text>

        </View>
      );
    }
    return (
      <Grid
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: 1
        }}
      >

        <Text>Hello World</Text>

      </Grid>
    );
  }
}

export default observer(offersPage);

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
    fontSize: 15,
    color: "#605F5F"
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
