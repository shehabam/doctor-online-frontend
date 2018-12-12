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
  AppRegistry,
  ScrollView
} from "react-native";
import Store from "../stores/store";
import { scrollViewHorizontal } from "react-native-gesture-handler";
import { withNamespaces } from "react-i18next";

class DoctorProfile extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t("other:doctorprofile"),
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  });

  likeSwitch = false;
  HeaderMaxHeight = 40;
  HeaderMinHeight = 40;
  ProfileImageMaxHeight = 40;
  ProfileImageMinHeight = 30;
  HalfProfileImageMaxHeight = this.ProfileImageMaxHeight / 2;

  likeButton() {
    if (Store.Like === false) {
      Store.Like = true;
    } else {
      Store.Like = false;
    }
  }

  chnageHeart(id) {
    const emptyHeart = (
      <Icon name="ios-heart-outline" style={{ color: "red" }} />
    );
    const fullHeart = <Icon name="ios-heart" style={{ color: "red" }} />;

    if (Store.Like === true) {
      Store.addToLikeList(id); // console.log(Store.LikeList.length);
      return fullHeart;
    } else {
      // Store.removeFromLikeList(id);
      // Store.addToLikeList(id);
      // console.log(Store.LikeList);
      return emptyHeart;
    }
  }

  render() {
    const { t, i18n, navigation } = this.props;

    const profileID = this.props.navigation.getParam("cat");
    const profile = Store.bringToProfile(profileID);
    const value = Store.StarRating();
    const filledStars = value - (value % 1);
    const halfStar = value % 1 !== 0;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
    const size = 25; // const color = Theme.palette.primary;

    const to = (index: number): number[] => {
      const numbers: number[] = [];
      for (let i = 0; i < index; i += 1) {
        numbers.push(i);
      }
      return numbers;
    };
    if (!profile) {
      return <View />;
    }
    return (
      <ScrollView>
        <Grid
          style={{
            backgroundColor: "orange",
            position: "relative",
            zIndex: 1
          }}
        >
          <Row
            size={0.75}
            style={{
              backgroundColor: "white"
            }}
          >
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

          <Row
            size={3}
            style={{
              backgroundColor: "white"
            }}
          >
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
                top: -1,
                shadowOpacity: 0.3,
                shadowOffset: {
                  height: 4,
                  width: 0
                }
              }}
            >
              <Button transparent onPress={() => this.likeButton()}>
                {this.chnageHeart(profile.id)}
              </Button>

              <Text style={styles.userViewsText}>
                {t("other:views")} {profile.viewers}
              </Text>

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
                  top: -115,

                  zIndex: 20
                }}
              >
                <Thumbnail
                  style={styles.thumbnailStyle}
                  large
                  source={{ uri: profile.img }}
                />
              </View>

              <View
                style={{
                  top: -45,
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
                  <Icon
                    name="ios-star-outline"
                    style={{ color: "yellow" }}
                    {...{
                      key,
                      size
                    }}
                  />
                ))}
              </View>

              <View
                style={{
                  top: -45,
                  alignSelf: "center",
                  alignContent: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={[styles.visitorsText]}>
                  {t("other:from")} {profile.rating_set.length}{" "}
                  {t("other:visitors")}
                </Text>

                <Text style={[styles.doctorName]}>
                  {t("other:doctor")}: {profile.user.first_name}{" "}
                  {profile.user.last_name}
                </Text>
              </View>

              <View
                style={{
                  top: -45,
                  alignSelf: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  flexDirection: "row"
                }}
              >
                <Text style={[styles.doctordesc1]}>{profile.description}</Text>
              </View>
            </View>
          </Row>

          <Row
            size={3.5}
            style={{
              backgroundColor: "white"
            }}
          >
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
              <Left>
                <Icon
                  type="EvilIcons"
                  name="location"
                  style={styles.locationIcon}
                >
                  <Text
                    style={styles.locationText}
                    // onPress={() => LinkingIOS.openURL(profile.google_maps)}
                  >
                    {t("other:googlemaps")}
                  </Text>
                </Icon>
              </Left>

              <Text style={styles.BookingnowStyle}>
                {" "}
                {t("other:bookdescription")}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                  alignSelf: "center"
                }}
              >
                <Button
                  rounded
                  warning
                  style={styles.bookingButton}
                  onPress={() =>
                    this.props.navigation.navigate("TimeDatePicker", {
                      cat: profile.id,
                      store: Store
                    })
                  } // onPress={() => this.props.navigation.navigate('TimeDatePicker')}
                >
                  <Text style={styles.buttonText}>{t("other:today")}</Text>
                </Button>
              </View>
            </View>
          </Row>

          <Row
            size={1.25}
            style={{
              backgroundColor: "white"
            }}
          >
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
                      {t("other:fees")}: {profile.fees} KD
                    </Text>
                  </Icon>
                </Col>

                <Col style={{ marginTop: 20 }}>
                  <Right>
                    <Icon type="Feather" name="clock" style={styles.clockIcon}>
                      <Text style={styles.thirdText}>
                        {t("other:waitingtime")}: {profile.waiting_time}
                      </Text>
                    </Icon>
                  </Right>
                </Col>
              </Row>
            </View>
          </Row>
          {/*                 <Row size={0.7} style={{
                    backgroundColor: 'black',}}/> */}
        </Grid>
      </ScrollView>
    );
  }
}

//export default observer(DoctorProfile);
export default withNamespaces(["other", "common"], { wait: true })(
  DoctorProfile
);

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
  // iconsStyle: {
  //   width: 28,
  //   height: 28,
  //   justifyContent: "flex-start"
  // },
  visitorsText: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontFamily: "GTWalsheim-Medium",
    fontSize: 12,
    color: "#919191"
  },
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
    //         alignSelf: 'center',
    //         alignContent: 'center',
    //         justifyContent: 'center',
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
  // ymenysarButtons: {
  //   color: "#48C1F6"
  // },
  thirdText: {
    fontSize: 16,
    fontFamily: "GTWalsheim-Medium",
    color: "#919191"
  },
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
  clockIcon: {
    color: "#48C1F6",
    fontSize: 30
  }
});
