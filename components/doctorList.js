import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View,
  Card,
  CardItem,
  Body,
  Thumbnail,
  Right
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

class DoctorList extends Component {
  render() {
    return (
      <Grid>
        <Row size={1} style={{ backgroundColor: "purple" }} />

        <Row size={5}>
          <Container>
            <Content>
              <Card>
                <CardItem large style={styles.thumbnailStyle}>
                  <Thumbnail source={require("../images/logo.png")} />
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.firstText}>Doctor Osama Habib</Text>
                    <Text style={styles.secondText}>Professor in Dentist</Text>
                    <Text style={styles.thirdText}>
                      <Icon
                        type="EvilIcons"
                        name="location"
                        style={styles.locationIcon}
                      />
                      Hawally: Al-Hamra Tower
                    </Text>

                    <Text style={styles.fourthText}>
                      <Image
                        style={styles.iconsStyle}
                        source={require("../assets/doctorTool.png")}
                      />
                      Doctor Audiology and neuorology
                    </Text>

                    <Text style={styles.fourthText}>
                      <Image
                        style={styles.iconsStyle}
                        source={require("../assets/clock.png")}
                      />
                      Waiting Time: 60 Minutes
                    </Text>
                    <Text style={styles.fourthText}>
                      <Image
                        style={styles.iconsStyle}
                        source={require("../assets/money.png")}
                      />
                      Fees: 30 KD
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={styles.bookingButtonCardItem}>
                  <Button rounded warning style={styles.bookingButton}>
                    <Text style={styles.buttonText}>Book</Text>
                  </Button>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Row>

        <Row size={3} style={{ backgroundColor: "yellow" }} />

        <Row size={1} style={{ backgroundColor: "pink" }} />
      </Grid>
    );
  }
}

export default DoctorList;

const styles = StyleSheet.create({
  thumbnailStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  firstText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#54BEED"
  },
  secondText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
  thirdText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
  locationIcon: {
    color: "#48C1F6"
  },
  fourthText: {
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191",
    paddingLeft: 5
  },
  iconsStyle: {
    width: 28,
    height: 28
  },
  bookingButtonCardItem: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  bookingButton: {
    height: 30,
    width: 140,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  buttonText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 14,
    fontFamily: "GTWalsheim-Medium"
  }
});
