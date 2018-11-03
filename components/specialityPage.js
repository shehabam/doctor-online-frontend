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
  Item,
  Input,
  Footer
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, TouchableHighlight, Image } from "react-native";
import SearchBar from "react-native-search-bar";
import Store from "../stores/store";
import { ScrollView } from "react-native-gesture-handler";
import FooterApp from "./footer";

class SpecialityPage extends Component {
  static navigationOptions = {
    title: "Choose by Speciality",
    headerStyle: {
      backgroundColor: "#00bfff"
    }
  };
  render() {
    if (!Store.Speciality) return <View />;
    let Specialities = Store.Speciality.map((Speciality, index) => {
      if (index % 2 === 0)
        return (
          <Row key={Speciality.id}>
            <Col key={Speciality.id}>
              <TouchableHighlight>
                <Card style={styles.cardBoxStyle}>
                  <Body>
                    <Thumbnail
                      square
                      source={{ uri: Speciality.img }}
                      style={{
                        marginTop: 15,
                        width: 75,
                        height: 75
                      }}
                    />
                    <Text style={styles.inputStyle}>{Speciality.name}</Text>
                  </Body>
                </Card>
              </TouchableHighlight>
            </Col>
            {Store.Speciality.length > index + 1 ? (
              <Col key={Store.Speciality[index + 1].id}>
                <TouchableHighlight>
                  <Card style={styles.cardBoxStyle}>
                    <Body>
                      <Thumbnail
                        large
                        transparent
                        source={{ uri: Store.Speciality[index + 1].img }}
                        style={{ marginTop: 15 }}
                      />
                      <Text style={styles.inputStyle}>
                        {Store.Speciality[index + 1].name}
                      </Text>
                    </Body>
                  </Card>
                </TouchableHighlight>
              </Col>
            ) : null}
          </Row>
        );
    });
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ flex: 12 }}>
          <Item>
            <Input
              placeholder="Search By Products..."
              onChangeText={e => Store.changeCategoryValue(e)}
            />
          </Item>

          <ScrollView>{Specialities}</ScrollView>
        </View>

        <View style={{ backgroundColor: "white", flex: 1 }}>
          <FooterApp />
        </View>
      </View>
    );
  }
}

export default observer(SpecialityPage);

const styles = StyleSheet.create({
  inputStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: 22,
    height: 60,
    fontFamily: "GTWalsheim-Medium",
    color: "#ffffff",
    backgroundColor: "#00bfff",
    flex: 1
  },
  ImageStyle: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#00bfff",
    flex: 1
  },
  cardBoxStyle: {
    marginLeft: 7,
    width: 190,
    height: 150,
    backgroundColor: "#00bfff"
  }
});
