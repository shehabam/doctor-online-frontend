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
import {
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";
import { DangerZone } from "expo";
import IMPULSE from "../utils/pulse.json";
const { Lottie } = DangerZone;
const window = Dimensions.get("window");

class anime extends Component {
  state = {
    animation: null
  };

  static navigationOptions = {
    header: null,
    Style: {
      backgroundColor: "#00bfff"
    },
    tabBarOptions: {
      activeTintColor: "#e91e63",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "blue"
      }
    }
  };

  static tabBarOptions = {
    tabBarVisible: false,
    activeTintColor: "white",
    inactiveTintColor: "black"
  };

  componentDidMount() {
    this._playAnimation();
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate("FirstPage");
    }, 3000);
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    this.setState({ animation: IMPULSE }, this._playAnimation);
  };

  render() {
    return (
      <View style={styles.animationContainer}>
        {/* <Image
          source={require("../assets/colorfulLogo.png")}
          style={{
            // flex: 1,
            justifyContent: "center",
            alignSelf: "center",
            width: 420,
            height: 320,
            alignContent: "center"
          }}
        /> */}
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: window.width,
              height: window.width / 1.1
            }}
            source={this.state.animation}
          />
        )}
      </View>
    );
  }
}

export default anime;

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
