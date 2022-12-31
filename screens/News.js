import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Button, Searchbar, TextInput } from "react-native-paper";
import NewDetail from "../components/NewDetail";

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: "5%",
          }}
        >
          <Image
            style={{ width: "15%", height: 40 }}
            source={require("../assets/sun.png")}
          />
          <View style={{ marginHorizontal: "5%" }}>
            <Text style={{ fontWeight: "700", color: "#FFFFFF" }}>
              GREEN AIR
            </Text>
          </View>
          <Image
            style={{ width: "15%", height: 40 }}
            source={require("../assets/sun.png")}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <View style={{alignItems:"center", marginTop:"5%"}}>
          <Searchbar
            placeholder="Search"
            style={{ backgroundColor: "#F1F5E8", width:"90%" }}
          />
        </View>

        <View style={{marginTop:"5%", left:"5%"}}>
            <Text style={{color:"#585D69"}}>Your search result</Text>
        </View>

        <View>
            <NewDetail/>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EA466",
  },
  background: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  footer: {
    flex: 12,
    backgroundColor: "#FFF9EC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default News;
