import React, { Component } from "react";
import { observer } from "mobx-react";
// import authStore from "../stores/authStore";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Icon,
  View,
  Form,
  Item,
  Input
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";

class LoginPage extends Component {
  static navigationOptions = {
    title: "Doctor Online"
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <Grid style={{ backgroundColor: "rgba(153, 204, 255, .6)" }}>
        {/* if (authStore.isAuthenticated); */}

        <Row size={1}>
          <Image
            source={require("../images/logo.png")}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </Row>
        <Row size={2.5}>
          <Form>
            <Item rounded style={styles.formBorder}>
              <Icon name="person" />
              <Input
                style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
                placeholder="Username"
                autoCapitalize="none"
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Row size={0.05} />
            <Item rounded style={styles.formBorder}>
              <Icon name="lock" />
              <Input
                style={{ fontFamily: "GTWalsheim-Medium", fontSize: 20 }}
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Row size={0.05} />
            <Button
              transparent
              style={styles.buttonBorder}
              rounded
              onPress={() =>
                authStore.loginUser(this.state.username, this.state.password)
              }
            >
              <Text style={{ alignContent: "center" }}>Login</Text>
            </Button>
            <Row size={0.5} />
            <Button
              rounded
              transparent
              style={styles.buttonBorder}
              onPress={() =>
                authStore.loginUser(this.state.username, this.state.password)
              }
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Row>
      </Grid>
    );
  }
}

export default observer(LoginPage);

const styles = StyleSheet.create({
  buttonBorder: {
    width: 320,
    marginLeft: 50,
    borderColor: "#fff",
    borderWidth: 3
  },
  formBorder: {
    width: 320,
    marginLeft: 50,
    borderWidth: 10,
    borderColor: "#fff"
  }
});

// // Routing
// import { Redirect } from "react-router-native";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   render() {
//     if (authStore.isAuthenticated) return <Redirect to="/profile" />;
//     return (
//       <Form>
//         <Item>
//           <Input
//             placeholder="Username"
//             autoCapitalize="none"
//             onChangeText={username => this.setState({ username })}
//           />
//         </Item>
//         <Item last>
//           <Input
//             placeholder="Password"
//             autoCapitalize="none"
//             secureTextEntry={true}
//             onChangeText={password => this.setState({ password })}
//           />
//         </Item>
//         <Button
//           full
//           onPress={() =>
//             authStore.loginUser(this.state.username, this.state.password)
//           }
//         >
//           <Text>Login</Text>
//         </Button>
//       </Form>
//     );
//   }
// }
// export default observer(Login);
