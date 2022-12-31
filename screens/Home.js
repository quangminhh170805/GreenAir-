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
import { Button, TextInput } from "react-native-paper";
import KoTot from "../components/KoTot";
import Tot from "../components/Tot";
import List from "../components/List";
import List2 from "../components/List2";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ paddingBottom: "10%" }}
      >
        <View style={styles.background}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={{ marginTop: "3%" }}>
              <Image source={require("../assets/1.png")} />
            </View>

            <View>
              <Text style={{ fontWeight: "400", fontSize: 12 }}>
                Hà Nội, Việt Nam
              </Text>
            </View>

            <View
              style={{
                marginTop: "10%",
              }}
            >
              <KoTot />
            </View>
            
            <View
              style={{
                marginTop: "5%",
                width: "100%",
                height: 167,
                backgroundColor: "#FFF2D6",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#3D7944", fontWeight: "500" }}>
                {" "}
                Hôm nay, 29/09/2022{" "}
              </Text>
              <View style={{ marginTop: "5%" }}>
                <List />
              </View>
            </View>

            <View
              style={{
                marginTop: "5%",
                width: "100%",
                height: 800,
                backgroundColor: "#FFF9EC",
              }}
            >
              <View>
                <List2 />
              </View>

              <View style={{ alignItems: "center", marginTop: "5%" }}>
                <Button
                  style={{
                    width: 161,
                    height: 37,
                    justifyContent: "center",
                    borderRadius: 6,
                    backgroundColor: "#5EA466",
                  }}
                  mode="contained"
                  onPress={() => navigation.navigate("Sign in")}
                >
                  {" "}
                  Thêm nơi mới{" "}
                </Button>
              </View>

              <View style={{ alignItems: "center", marginTop: "5%" }}>
                <Image source={require("../assets/phokhu.png")} />
              </View>

              <View style={{ alignItems: "center", marginTop: "3%" }}>
                <Text style={{ fontWeight: "400", fontSize: 12 }}>
                  Hà Nội, Việt Nam
                </Text>
              </View>

              <View>
              <Tot />
            </View>
              
            </View>
          </View>
        </View>
      </ScrollView>
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

export default Home;
