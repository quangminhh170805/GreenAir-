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

function List3(props) {
  const [lists, setList] = useState([
    {
      id: "1",
      time: "Thứ 2",
      range: "0 - 50 Tốt",
      icon: require("../assets/tot.png"),
      description: "Chất lượng không khí tốt và ít hoặc ",
      description2: "không có nguy cơ về sức khỏe. Bạn ",
      description3: "nên để không khí trong nhà được lưu thông.",
    },
    {
      id: "2",
      time: "Thứ 4",
      range: "51 - 100 Trung bình",
      icon: require("../assets/trb.png"),
      description: "Những người nhạy cảm nên tránh các ",
      description2: "hoạt động ngoài trời vì có thể mắc các",
      description3: "triệu chứng liên quan đến hô hấp.",
    },
    {
      id: "3",
      time: "Thứ 5",
      range: "101 - 150 Không tốt cho nhóm nhạy cảm",
      icon: require("../assets/kotot.png"),
      description: "Công chúng nói chung và những người",
      description2: "nhạy cảm nói riêng có nguy cơ bị kích",
      description3: "ứng và các vấn đề hô hấp.",
    },
    {
      id: "4",
      time: "Thứ 6",
      range: "151 - 200 Có hại cho sức khỏe",
      icon: require("../assets/cohai.png"),
      description: " Tăng khả năng gặp tác dụng phụ và ",
      description2: "tăng mức độ trầm trọng bệnh tim và",
      description3: "phổi của người dân - đặc biệt là những",
      description4: "nhóm nhạy cảm.",
    },
    {
      id: "5",
      time: "Thứ 7",
      range: "201 - 300 Rất có hại cho sức khỏe ",
      icon: require("../assets/rathai.png"),
      description: "Tất cả mọi người sẽ bị ảnh hưởng",
      description2: " đáng kể. Nhóm người nhạy cảm sẽ bị",
      description3: "giảm sức bền trong các hoạt động.",
      description4: "Những cá nhân này nên ở trong nhà và",
      description5: "hạn chế hoạt động mạnh.",
    },
    {
      id: "6",
      time: "Thứ 8",
      range: "301+ Nguy hại",
      icon: require("../assets/ngha.png"),
      description: " Tất cả mọi người và nhóm người nhạy",
      description2: "cảm có nguy cơ gặp phải các phản",
      description3: "ứng mạnh, những ảnh hưởng xấu đến",
      description4: "sức khỏe và có thể gây ra các bệnh",
      description5: "khác. Mọi người nên tránh tập thể dục",
      description6: "và ở trong nhà.",

    },
  ]);

  return (
    <View style={{ marginTop: 10 }}>
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
                }}
              >
                <View style={{ marginRight: "5%" }}>
                  <Image source={item.icon} />
                </View>

                <View style={{ marginRight: "5%", justifyContent: "center" }}>
                  <Text style={{fontWeight:"600"}}>{item.range}</Text>
                  <Text>{item.description}</Text>
                  <Text>{item.description2}</Text>
                  <Text>{item.description3}</Text>
                  <Text>{item.description4}</Text>
                  <Text>{item.description5}</Text>
                  <Text>{item.description6}</Text>

                </View>
              </View>
            );
          }}
        ></FlatList>
    </View>
  );
}

export default List3;
