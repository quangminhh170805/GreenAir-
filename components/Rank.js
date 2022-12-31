import { useNavigation } from "@react-navigation/native";
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

function Rank(props) {
  const navigation = useNavigation();
  const [lists, setList] = useState([
    {
      id: "1",
      num: "1",
      name: "Delhi, Ấn Độ",
      icon: require("../assets/india.png"),
      score: "166",
      color: "#E83F38",
    },
    {
      id: "2",
      num: "2",
      name: "Vũ Hán, Trung Hoa",
      icon: require("../assets/china.png"),
      score: "152",
      color: "#E83F38",
    },
    {
      id: "3",
      num: "3",
      name: "Nhân Xuyên, Nam Triều Tiên",
      icon: require("../assets/korea.png"),
      score: "151",
      color: "#E83F38",
    },
    {
      id: "4",
      num: "4",
      name: "Thành Đô, Trung Hoa",
      icon: require("../assets/china.png"),
      score: "115",
      color: "#E46A35",
    },
    {
      id: "5",
      num: "5",
      name: "Seoul, Nam Triều Tiên",
      icon: require("../assets/korea.png"),
      score: "110",
      color: "#E46A35",
    },
    {
      id: "6",
      num: "6",
      name: "Mumbai, Ấn Độ",
      icon: require("../assets/india.png"),
      score: "109",
      color: "#E46A35",
    },
    {
      id: "7",
      num: "7",
      name: "Wroclaw, Ba Lan",
      icon: require("../assets/balan.png"),
      score: "104",
      color: "#E46A35",
    },
    {
      id: "8",
      num: "8",
      name: "Santiago, Chile",
      icon: require("../assets/chile.png"),
      score: "99",
      color: "#FBBD3A",
    },
    {
      id: "9",
      num: "9",
      name: "Karachi, Pakistan",
      icon: require("../assets/pakistan.png"),
      score: "82",
      color: "#FBBD3A",
    },

    {
      id: "10",
      num: "10",
      name: "Lima, Peru",
      icon: require("../assets/peru.png"),
      score: "69",
      color: "#FBBD3A",
    },
  ]);

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView>
        <FlatList
          data={lists}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight
                onPress={() => navigation.navigate("Detail Rank")}
                underlayColor={"#FFF9EC"}
              >
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: "5%",
                    marginVertical: "3%",
                  }}
                >
                  <View style={{ marginRight: "5%" }}>
                    <Text style={{fontWeight:"600"}}>{item.num}</Text>
                  </View>

                  <View style={{ marginRight: "5%" }}>
                    <Image source={item.icon} />
                  </View>

                  <View style={{ marginRight: "5%" }}>
                    <Text>{item.name}</Text>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <View
                      style={{
                        width: 70,
                        height: 20,
                        backgroundColor: item.color,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                      }}
                    >
                      <Text>{item.score}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

export default Rank;
