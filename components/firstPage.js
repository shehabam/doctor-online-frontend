import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

class FirstPage extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(153, 204, 255, .6)" }}>
        <Row size={1} />
        <Row size={2.5}>
          <Image
            source={require("../images/logo.png")}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </Row>
        <Row size={0.5} style={styles.bookTheBestTextRow}>
          <Text style={styles.bookTheBestText}>
            Book the Best Doctors in Kuwait
          </Text>
        </Row>
        <Row size={0.5} />
        <Row size={1} style={styles.buttonRow}>
          <Button
            rounded
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Area")}
          >
            <Text style={styles.text}>
              <Icon
                type="MaterialCommunityIcons"
                name="needle"
                style={styles.needleIcon}
              />
              Choose by Speciality and Area
            </Text>
          </Button>
        </Row>
        <Row size={1.5} />
        <Row size={1.5} style={styles.touchableTextRow}>
          <TouchableHighlight>
            <Button
              rounded
              style={styles.button}
              onPress={() => this.props.navigation.navigate("LoginPage")}
            >
              <Text style={styles.text}>Login</Text>
            </Button>
          </TouchableHighlight>
        </Row>

        {/* <Button rounded style={styles.button}>
          <Text style={styles.text}>
            <Icon
              type="MaterialCommunityIcons"
              name="needle"
              style={styles.needleIcon}
            />
            Choose by Speciality and Area
          </Text>
        </Button>
        <TouchableHighlight style={styles.touchable}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight> */}
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  // root: {
  //   backgroundColor: "skyblue",
  //   flex: 1
  // },
  headerRow: {
    backgroundColor: "red"
  },
  button: {
    // height: "70%",
    width: "90%",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 4,
    shadowOpacity: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    shadowOffset: {
      height: 2,
      width: 0
    }
  },
  buttonRow: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center"
  },
  text: {
    color: "#54BEED",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium"
  },
  needleIcon: {
    color: "#48C1F6"
  },
  touchable: {
    top: "850%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    fontFamily: "GTWalsheim-Medium"
  },
  loginText: {
    color: "white",
    fontFamily: "GTWalsheim-Medium"
  },
  bookTheBestTextRow: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  bookTheBestText: {
    color: "white",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      height: 2,
      width: 0
    },
    fontFamily: "GTWalsheim-Medium"
  },
  touchableTextRow: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  loginText: {
    color: "black",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    fontFamily: "GTWalsheim-Medium"
  }
});
export default FirstPage;
