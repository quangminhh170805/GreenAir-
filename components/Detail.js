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
import List3 from "./List3";

const Detail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              left: "-5%",
            }}
          >
            <View style={{ left: "-100%" }}>
              <Ionicons name="arrow-back-outline" size={38} color={"#ffffff"} onPress={() => navigation.navigate("Tabs")}/>
            </View>

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
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={{ marginTop: "5%" }}>
              <Text style={{ color: "#4D8365", fontWeight: "400" }}>
                {" "}
                Chỉ số AQI (Air Quality Index) là một chỉ số báo cáo{"\n"} chất
                lượng không khí hàng ngày. Nó cho bạn biết{"\n"} không khí quanh
                bạn là sạch hay ô nhiễm và những{"\n"} ảnh hưởng liên quan tới
                sức khỏe của bạn. Chỉ số AQI{"\n"} tập trung vào sự ảnh hưởng
                sức khỏe bạn có thể gặp{"\n"} trong vòng vài giờ hoặc vài ngày
                sau khi hít thở không{"\n"} khí ô nhiễm.
              </Text>
            </View>

            <View>
              <List3 />
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
    flex: 10,
    backgroundColor: "#FFF9EC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default Detail;
