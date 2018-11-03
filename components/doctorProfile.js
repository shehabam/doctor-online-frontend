import React, { Component } from "react";
import { observer } from "mobx-react";
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
import FooterApp from "./footer";
import Swiper from "react-native-swiper";

class DoctorProfile extends Component {
  static navigationOptions = {
    title: "Doctor Profile",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };

  HeaderMaxHeight = 40;
  HeaderMinHeight = 40;
  ProfileImageMaxHeight = 40;
  ProfileImageMinHeight = 30;
  HalfProfileImageMaxHeight = this.ProfileImageMaxHeight / 2;

  componentDidMount() {
    let profileID = this.props.navigation.getParam("cat");
    Store.bringToProfile(profileID);
  }

  render() {
    // const { votes, value } = this.props;
    const value = 4.5;
    const votes = 3;
    const filledStars = value - (value % 1);
    const halfStar = value % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
    const size = 25;
    console.log(this.props);
    console.log(votes);
    console.log(value);

    // const color = Theme.palette.primary;

    const to = (index: number): number[] => {
      const numbers: number[] = [];
      for (let i = 0; i < index; i += 1) {
        numbers.push(i);
      }
      return numbers;
    };
    if (!Store.doctorProfile) {
      return <View />;
    }
    return (
      <Grid
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: 1
        }}
      >
        <Row size={0.75}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: "white",
              zIndex: 2,
              height: this.HeaderMaxHeight
            }}
          />
        </Row>
        <Row size={3}>
          <View
            style={{
              borderColor: "#CCCCCC",
              position: "relative",
              zIndex: 2,
              borderWidth: 0.5,
              backgroundColor: "white",
              width: "97%",
              margin: "1.75%",
              shadowColor: "rgba(0,0,0,0.9)",
              shadowRadius: 4,
              shadowOpacity: 0.3,
              shadowOffset: {
                height: 4,
                width: 0
              }
            }}
          >
            <View
              style={{
                height: this.ProfileImageMaxHeight,
                width: this.ProfileImageMinHeight,
                borderRadius: this.ProfileImageMaxHeight / 2,
                borderColor: "white",
                borderWidth: 3,
                marginTop:
                  this.HeaderMaxHeight - this.HalfProfileImageMaxHeight,
                marginLeft: "45%",
                position: "relative",
                top: -55,

                zIndex: 20
              }}
            >
              <Thumbnail
                style={styles.thumbnailStyle}
                large
                source={{ uri: Store.doctorProfile.img }}
              />
            </View>
            <Icon type="Feather" name="clock" style={styles.locationIcon} />
            <Text style={styles.userViewsText}>Views 80,938></Text>
            <View
              style={{
                alignSelf: "center",
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              {to(filledStars).map(key => (
                <Icon
                  name="ios-star"
                  style={{ color: "yellow" }}
                  {...{ key, size }}
                />
              ))}
              {halfStar && (
                <Icon
                  name="ios-star-half"
                  style={{ color: "yellow" }}
                  {...{ size }}
                />
              )}
              {to(emptyStars).map(key => (
                <Icon name="ios-star-outline" {...{ key, size }} />
              ))}
              <Text style={styles.text}>{`${votes} votes`}</Text>
            </View>
            <Text style={styles.visitorsText}>From # Visitors</Text>
            {/* <Text style={styles.doctorName}>Doctor: {doctorname.email}</Text> */}
            <Text style={styles.doctordesc1}>
              {Store.doctorProfile.description}
            </Text>
            <Text style={styles.doctordesc1}>
              {Store.doctorProfile.description}
            </Text>
            <Text style={styles.doctordesc1}>
              {Store.doctorProfile.description}
            </Text>
            <Text style={styles.doctordesc1}>
              {Store.doctorProfile.description}
            </Text>
            <Text style={styles.doctordesc1}>
              {Store.doctorProfile.description}
            </Text>
          </View>
        </Row>
        <Row size={3.5}>
          <View
            style={{
              borderColor: "#CCCCCC",

              zIndex: 2,
              borderWidth: 0.5,
              backgroundColor: "white",
              width: "97%",
              margin: "1.75%",
              shadowColor: "rgba(0,0,0,0.9)",
              shadowRadius: 4,
              shadowOpacity: 0.3,
              shadowOffset: {
                height: 4,
                width: 0
              }
            }}
          >
            <Icon type="EvilIcons" name="location" style={styles.locationIcon}>
              <Text
                style={styles.locationText}
                onPress={() =>
                  LinkingIOS.openURL(Store.doctorProfile.google_maps)
                }
              >
                google maps
              </Text>
            </Icon>
            <Text style={styles.BookingnowStyle}>
              Book now and you will recieve full address details and clinic
              number
            </Text>
            <Swiper style={styles.wrapper} showsButtons={true} index={5}>
              {/* <ScrollView horizontal={true}> */}
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Button rounded warning style={styles.bookingButton}>
                  <Text style={styles.buttonText}>Today</Text>
                </Button>
                <Button rounded warning style={styles.bookingButton}>
                  <Text style={styles.buttonText}>Tommorow</Text>
                </Button>
                <Button rounded warning style={styles.bookingButton}>
                  <Text style={styles.buttonText}>After Tommorow</Text>
                </Button>
              </View>
              <Button rounded warning style={styles.bookingButton}>
                <Text style={styles.buttonText}>Today</Text>
              </Button>
              <Button rounded warning style={styles.bookingButton}>
                <Text style={styles.buttonText}>Tommorow</Text>
              </Button>
              <Button rounded warning style={styles.bookingButton}>
                <Text style={styles.buttonText}>After Tommorow</Text>
              </Button>
              {/* </ScrollView> */}
            </Swiper>
          </View>
        </Row>
        <Row size={1.25}>
          <View
            style={{
              borderColor: "#CCCCCC",
              zIndex: 2,
              backgroundColor: "white",
              borderWidth: 0.5,
              width: "97%",
              margin: "1.75%",
              shadowColor: "rgba(0,0,0,0.9)",
              shadowRadius: 4,
              shadowOpacity: 0.3,
              shadowOffset: {
                height: 4,
                width: 0
              }
            }}
          >
            <Row>
              <Col style={{ marginTop: 20 }}>
                <Icon
                  type="EvilIcons"
                  name="location"
                  style={styles.locationIcon}
                >
                  <Text style={styles.thirdText}>
                    Fees: {Store.doctorProfile.fees} KD
                  </Text>
                </Icon>
              </Col>
              <Col style={{ marginTop: 20 }}>
                <Right>
                  <Icon type="Feather" name="clock" style={styles.clockIcon}>
                    <Text style={styles.thirdText}>
                      Waiting Time: {Store.doctorProfile.waiting_time}
                    </Text>
                  </Icon>
                </Right>
              </Col>
            </Row>
          </View>
        </Row>
        <Row size={1}>
          <View>
            <FooterApp />
          </View>
        </Row>
      </Grid>
    );
  }
}

export default observer(DoctorProfile);

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
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  thumbnailStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    // width: 40,
    // height: 40,
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
    width: "15%",
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

AppRegistry.registerComponent("DoctorProfile", () => Swiper);

// <Grid style={{ backgroundColor: 'white' }}>
// 	<Row size={0.5}>
// 		<View
// 			style={{
// 				position: 'absolute',
// 				top: 0,
// 				left: 0,
// 				right: 0,
// 				backgroundColor: 'white',
// 				height: this.HeaderMaxHeight
// 			}}
// 		/>
// 	</Row>
// 	<Row size={5}>
// 		<Content>
// 			<Card style={styles.cardStyle}>
// 				<View
// 					style={{
// 						borderRadius: this.ProfileImageMaxHeight / 2,
// 						borderColor: 'white'
// 					}}
// 				>
// 					<Thumbnail
// 						style={styles.thumbnailStyle}
// 						large
// 						source={{ uri: Store.doctorProfile.img }}
// 					/>
// 				</View>
// 				<Icon type="Feather" name="clock" style={styles.locationIcon} />
// 				<Text style={styles.userViewsText}>Views 80,938></Text>
// 				<Text style={styles.startStyle}>stars will be here</Text>
// 				<Text style={styles.visitorsText}>From # Visitors</Text>
// 				{/* <Text style={styles.doctorName}>Doctor: {doctorname.email}</Text> */}
// 				<Text style={styles.doctordesc1}>{Store.doctorProfile.description}</Text>
// 				<Text style={styles.doctordesc1}>{Store.doctorProfile.description}</Text>
// 				<Text style={styles.doctordesc1}>{Store.doctorProfile.description}</Text>
// 				<Text style={styles.doctordesc1}>{Store.doctorProfile.description}</Text>
// 				<Text style={styles.doctordesc1}>{Store.doctorProfile.description}</Text>
// 			</Card>
// 		</Content>
// 	</Row>
// 	<Row size={2.5}>
// 		<View>
// 			<Card style={styles.cardStyle}>
// 				<CardItem>
// 					<Body>
// 						<Icon type="EvilIcons" name="location" style={styles.locationIcon}>
// 							<Text
// 								style={styles.locationText}
// 								onPress={() => LinkingIOS.openURL(Store.doctorProfile.google_maps)}
// 							>
// 								google maps
// 							</Text>
// 						</Icon>
// 						<Text style={styles.BookingnowStyle}>
// 							Book now and you will recieve full address details and clinic number
// 						</Text>
// 					</Body>
// 				</CardItem>
// 				<CardItem>
// 					<Body />
// 				</CardItem>
// 				<CardItem>
// 					<Swiper style={styles.wrapper} showsButtons={true}>
// 						<Button rounded warning style={styles.bookingButton}>
// 							<Text style={styles.buttonText}>Book</Text>
// 						</Button>
// 						<Button rounded warning style={styles.bookingButton}>
// 							<Text style={styles.buttonText}>Book</Text>
// 						</Button>
// 						<Button rounded warning style={styles.bookingButton}>
// 							<Text style={styles.buttonText}>Book</Text>
// 						</Button>
// 					</Swiper>
// 				</CardItem>
// 			</Card>
// 		</View>
// 	</Row>
// 	<Row size={2.5}>
// 		<Content>
// 			<Card style={styles.cardStyle}>
// 				<CardItem>
// 					<Body>
// 						<Icon type="EvilIcons" name="location" style={styles.locationIcon}>
// 							<Text style={styles.thirdText}>Fees: {Store.doctorProfile.fees} KD</Text>
// 						</Icon>
// 					</Body>
// 					<Body>
// 						<Icon type="Feather" name="clock" style={styles.clockIcon}>
// 							<Text style={styles.thirdText}>
// 								Waiting Time: {Store.doctorProfile.waiting_time}
// 							</Text>
// 						</Icon>
// 					</Body>
// 				</CardItem>
// 			</Card>
// 		</Content>
// 	</Row>
// </Grid>
