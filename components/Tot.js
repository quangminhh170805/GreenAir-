import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableHighlight,
  Image,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tot = () => {
  return (
    <TouchableHighlight>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <View
          style={{
            width: 334,
            height: 224,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#6C912D",
            borderRadius: 6,
          }}
        >
          <View
            style={{
              top: "-10%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../assets/tot.png")} />
          </View>

          <View
            style={{
              top: "-5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#70747E" }}>Tốt!!! </Text>
          </View>

          <View
            style={{
              width: "50%",
              height: "56.97%",
              backgroundColor: "#C1DD9B",
              borderBottomLeftRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 39, fontWeight: "500" }}> 43</Text>
            <Text> AQI Mỹ</Text>
          </View>

          <View
            style={{
              left: "50%",
              top: "-56.94%",
              width: "50%",
              height: "56.97%",
              backgroundColor: "#92C251",
              borderBottomRightRadius: 5,
            }}
          >
            <View style={{ top: "5%", left: "5%", flexDirection: "row" }}>
              <Image source={require("../assets/weather.png")} />
              <View style={{ justifyContent: "center", left: "10%" }}>
                <Text style={{ color: "#fff", fontWeight: "500" }}>
                  {" "}
                  26 độ{" "}
                </Text>
              </View>
            </View>

            <View style={{ top: "15%", left: "5%", flexDirection: "row" }}>
              <Image source={require("../assets/mua.png")} />
              <View style={{ justifyContent: "center", left: "10%" }}>
                <Text style={{ color: "#fff", fontWeight: "500" }}> 93% </Text>
              </View>
            </View>

            <View style={{ top: "25%", left: "5%", flexDirection: "row" }}>
              <Image source={require("../assets/gio.png")} />
              <View style={{ justifyContent: "center", left: "10%" }}>
                <Text style={{ color: "#fff", fontWeight: "500" }}>
                  9.8 km/h{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Tot;
