import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

function Signin({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <View style={{ marginTop: StatusBar.currentHeight }}>
        <View>
          <Image
            source={require("../assets/world.png")}
            resizeMode="cover"
            style={{ width: "100%" }}
          />
        </View>

        <View style={{ top: "-24%" }}>
          <View
            style={{
              width: 350,
              height: 620,
              backgroundColor: "#FFFFFF",
              alignSelf: "center",
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <View style={{ top: "-11%" }}>
              <Image source={require("../assets/sun.png")} />
            </View>

            <View style={{ top: "-15%" }}>
              <Text
                style={{ color: "#357843", fontSize: 32, fontWeight: "700" }}
              >
                Green Air
              </Text>
            </View>

            <View style={{ marginTop: "5%" }}>
              <View style={{ top: "-130%" }}>
                <Text>Username</Text>
              </View>
              <TextInput
                label={"Enter your username"}
                mode="outlined"
                outlineColor="#C4C4C4"
                activeOutlineColor="#5EA466"
                value={email}
                onChangeText={(text) => setPass(setEmail)}
                style={{
                  width: 319,
                  height: 41,
                  top: "-125%",
                  borderRadius: 10,
                }}
              ></TextInput>
            </View>

            <View style={{ marginTop: "10%" }}>
              <View style={{ top: "-130%" }}>
                <Text>Password</Text>
              </View>
              <TextInput
                label={"Enter your password"}
                mode="outlined"
                outlineColor="#C4C4C4"
                activeOutlineColor="#5EA466"
                value={pass}
                secureTextEntry={true}
                onChangeText={(text) => setPass(setEmail)}
                style={{
                  width: 319,
                  height: 41,
                  top: "-125%",
                  borderRadius: 10,
                }}
              ></TextInput>
            </View>

            <View style={{ top: "-5%" }}>
              <Button
                style={{
                  borderRadius: 6,
                  width: 317,
                  height: 50,
                  backgroundColor: "#5EA466",
                  justifyContent: "center",
                }}
                mode="contained"
                onPress={() => navigation.navigate("Tabs")}
              >
                {" "}
                Login{" "}
              </Button>
            </View>

            <View>
              <Text>or continue with</Text>
            </View>

            <View style={{ flexDirection: "row", marginTop:"5%" }}>
              <Button
                style={{
                  borderRadius: 6,
                  width: "40%",
                  height: 50,
                  backgroundColor: "#4285F4",
                  justifyContent: "center",
                  
                }}
                mode="contained"
                onPress={() => navigation.navigate("Tabs")}
              >
                {" "}
                Facebook{" "}
              </Button>

              <View style={{marginHorizontal:"5%"}}/>


              <Button
                style={{
                  borderRadius: 6,
                  width: "40%",
                  height: 50,
                  backgroundColor: "#EB4335",
                  justifyContent: "center",
                }}
                mode="contained"
                onPress={() => navigation.navigate("Tabs")}
              >
                {" "}
                Google{" "}
              </Button>
            </View>

            <View style={{ top: "5%" }}>
              <Text style={{ fontSize: 14, textAlign: "center" }}>
                Bạn đã có tài khoản chưa ? {""}
                <Text
                  onPress={() => Alert.alert("HI")}
                  style={{ color: "#5EA466" }}
                >
                  Đăng ký{" "}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5EA466",
  },
});

export default Signin;
