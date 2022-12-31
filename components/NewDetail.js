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

function NewDetail(props) {
    const [lists, setList] = useState([
      {
        id: "1",
        icon: require("../assets/a3.png"),
        description:"Thông tin về các loại rác thải và",
        description2:"cách xử lý",
        author:"Mic"

      },
      {
        id: "2",
        num: "2",
        name: "Vũ Hán, Trung Hoa",
        icon: require("../assets/a1.png"),
        description:"Các cách tái chế rác tại nhà cực",
        description2:"đơn giản",
        author:"Joe"
      },
      {
        id: "3",
        num: "3",
        name: "Nhân Xuyên, Nam Triều Tiên",
        icon: require("../assets/a2.png"),
        description:"Học về mô hình 3R",
        author:"John"
      },  ]);

      return (
        <View style={{ marginTop: 20 }}>
          <ScrollView>
            <FlatList
              data={lists}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return ( 
                    <View  style={{
                    flexDirection: "row",
                    marginHorizontal: "5%",
                    marginVertical: "3%",
                  }}>

                    <View>
                        <Image source={item.icon}/>
                    </View>

                    <View style={{left:"5%", marginVertical:"5%"}}>
                        <Text style={{fontWeight:"700"}}>{item.description}</Text>
                        <Text style={{fontWeight:"700"}}>{item.description2}</Text>
                        <Text style={{fontWeight:"400"}}>{item.author}</Text>

                    </View>

                    </View>
                 );
            }}
          ></FlatList>
        </ScrollView>
      </View>
    );
  }
  
  export default NewDetail;