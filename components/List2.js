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

function List2(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      time: "Thứ 2",
      range: "0-50",
      color: "#92C251",
      weather: require("../assets/maymua.png"),
      degrees: "22•C",
    },

    {
      id: "2",
      time: "Thứ 3",
      range: "0-50",
      color: "#92C251",
      weather: require("../assets/may.png"),
      degrees: "22•C",
    },
    {
      id: "3",
      time: "Thứ 4",
      range: "51-100",
      color: "#FBBD3A",
      weather: require("../assets/nang.png"),
      degrees: "22•C",
    },
    {
      id: "4",
      time: "Thứ 5",
      range: "101-150",
      color: "#E46A35",
      weather: require("../assets/maynang.png"),
      degrees: "22•C",
    },
    {
      id: "5",
      time: "Thứ 6",
      range: "151-200",
      color: "#E83F38",
      weather: require("../assets/maymua.png"),
      degrees: "22•C",
    },
    {
      id: "6",
      time: "Thứ 7",
      range: "201-250",
      color: "#C06DA9",
      weather: require("../assets/nang.png"),
      degrees: "22•C",
    },
    {
      id: "7",
      time: "Thứ 8",
      range: "251-300",
      color: "#5A5758",
      weather: require("../assets/maynang.png"),
      degrees: "22•C",
    },
  ]);

  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView>
        <FlatList
          data={lists}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: "5%",
                  marginVertical: "3%",
                }}
              >
                <View style={{ marginRight: "15%" }}>
                  <Text>{item.time}</Text>
                </View>

                <View style={{ marginRight: "5%" }}>
                  <Image source={item.weather} />
                </View>

                <View style={{ marginRight: "5%" }}>
                  <Text>{item.degrees}</Text>
                </View>

                <View style={{ marginRight: "5%" }}>
                  <Text>{item.degrees}</Text>
                </View>

                <View style={{ marginLeft: "10%" }}>
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
                    <Text style={{ color: "#FFF", fontWeight: "500" }}>
                      {item.range}
                    </Text>
                  </View>
                </View>
                
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

export default List2;
