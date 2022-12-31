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

function List(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      time: "01:00",
      range: "0-50",
      color: "#92C251",
      weather: require("../assets/maymua.png"),
      degrees: "22•C",
    },

    {
      id: "2",
      time: "02:00",
      range: "0-50",
      color: "#92C251",
      weather: require("../assets/may.png"),
      degrees: "22•C",
    },
    {
      id: "3",
      time: "03:00",
      range: "51-100",
      color: "#FBBD3A",
      weather: require("../assets/nang.png"),
      degrees: "22•C",
    },
    {
      id: "4",
      time: "04:00",
      range: "101-150",
      color: "#E46A35",
      weather: require("../assets/maynang.png"),
      degrees: "22•C",
    },
    {
      id: "5",
      time: "05:00",
      range: "151-200",
      color: "#E83F38",
      weather: require("../assets/maymua.png"),
      degrees: "22•C",
    },
    {
      id: "6",
      time: "06:00",
      range: "201-250",
      color: "#C06DA9",
      weather: require("../assets/nang.png"),
      degrees: "22•C",
    },
    {
      id: "7",
      time: "07:00",
      range: "251-300",
      color: "#5A5758",
      weather: require("../assets/maynang.png"),
      degrees: "22•C",
    },
  ]);

  return (
      <ScrollView>
        <FlatList
          data={lists}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={{ marginHorizontal: 14, alignItems: "center" }}>
                <View style={{justifyContent:"center", alignItems:'center'}}>
                  <Text style={{color:"#757575", fontWeight:"400"}}>{item.time}</Text>
                </View>

                <View style={{ marginTop: 6 }}>
                  <View
                    style={{
                      width: 70,
                      height: 20,
                      backgroundColor: item.color,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius:5,
                    }}
                  >
                    <Text style={{color:"#FFF", fontWeight:"500"}}>{item.range}</Text>
                  </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Image source={item.weather} />
                </View>

                <View style={{ marginTop: 6 }}>
                  <Text>{item.degrees}</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </ScrollView>
  );
}

export default List;
