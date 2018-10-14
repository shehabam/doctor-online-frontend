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
import { bold } from "ansi-colors";

class DoctorProfile extends Component {
  render() {
    return (
      <Grid>
        <Row size={1} style={{ backgroundColor: "purple" }} />

        <Row size={4}>
          <Container>
            <Content>
              <Thumbnail
                style={styles.thumbnailStyle}
                large
                source={require("../images/logo.png")}
              />
              />
              <Card style={styles.cardStyle}>
                <CardItem>
                  <Body>
                    <Text style={styles.userViewsText}>Views 80,938></Text>
                    <Icon
                      type="Feather"
                      name="clock"
                      style={styles.locationIcon}
                    />
                    <Text style={styles.startStyle}>stars will be here</Text>
                    <Text style={styles.visitorsText}>From # Visitors</Text>
                    <Text style={styles.doctorName}>Doctor Mofeed Khory</Text>
                    <Text style={styles.doctordesc1}>
                      Consultant in some some some some some some some some
                      Doctor Dentistry specialized in Pediatric Dentistry,
                      Cosmetic Dentistry, Endodontics, Periantics, Orthodontics,
                      Prosthodontics, Elder Dentistry, Oral Radilogy,
                      Implantology and Adult Dentistry.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Row>

        <Row size={2.5}>
          <Container>
            <Content>
              <Card style={styles.cardStyle}>
                <CardItem>
                  <Body>
                    <Icon
                      type="EvilIcons"
                      name="location"
                      style={styles.locationIcon}
                    >
                      <Text style={styles.locationText}>
                        Hawally: aL-Hamra Tower
                      </Text>
                    </Icon>
                    <Text style={styles.BookingnowStyle}>
                      Book now and you will recieve full address details and
                      clinic number
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body />
                </CardItem>
                <CardItem>
                  <Icon
                    style={styles.ymenysarButtons}
                    type="Entypo"
                    name="chevron-left"
                  />
                  <Button rounded warning style={styles.bookingButton}>
                    <Text style={styles.buttonText}>Book</Text>
                  </Button>
                  <Button rounded warning style={styles.bookingButton}>
                    <Text style={styles.buttonText}>Book</Text>
                  </Button>
                  <Button rounded warning style={styles.bookingButton}>
                    <Text style={styles.buttonText}>Book</Text>
                  </Button>
                  <Icon
                    style={styles.ymenysarButtons}
                    type="Entypo"
                    name="chevron-right"
                  />
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Row>

        <Row size={1.5}>
          <Container>
            <Content>
              <Card style={styles.cardStyle}>
                <CardItem>
                  <Body>
                    <Icon
                      type="EvilIcons"
                      name="location"
                      style={styles.locationIcon}
                    >
                      <Text style={styles.thirdText}>Fees: # KD</Text>
                    </Icon>
                  </Body>
                  <Body>
                    <Icon type="Feather" name="clock" style={styles.clockIcon}>
                      <Text style={styles.thirdText}>
                        Waiting Time: # Minutes
                      </Text>
                    </Icon>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Row>
        <Row size={1} style={{ backgroundColor: "blue" }} />
      </Grid>
    );
  }
}

export default DoctorProfile;

const styles = StyleSheet.create({
  thumbnailStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center"
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
    height: 35,
    width: 80,
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
    shadowColor: "rgba(0,0,0,0.5)",
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
