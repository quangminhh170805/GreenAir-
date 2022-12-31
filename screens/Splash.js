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
import { Button } from "react-native-paper";
function Splash({ navigation }) {
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

        <View>
          <View
            style={{
              width: 350,
              height: 361,
              backgroundColor: "#FFFFFF",
              alignSelf: "center",
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontWeight: "700", fontSize: 22, textAlign: "center" }}
            >
              {"\n"}Nhận thông tin chính xác về thời tiết, nhiệt độ, hướng gió
              và chất lượng không khí.
            </Text>

            <View style={{ top: "5%" }}>
              <Text style={{ fontSize: 14, textAlign: "center" }}>
                Lên kế hoạch chuẩn bị cho một ngày của bạn trở nên thuận lợi hơn
                với Weather App.
              </Text>
            </View>

            <View style={{ top: "15%" }}>
              <Button
                style={{
                  width: 264,
                  height: 60,
                  justifyContent: "center",
                  borderRadius: 30,
                  backgroundColor: "#5EA466",
                }}
                mode="contained"
                onPress={() => navigation.navigate("Sign in")}
              >
                {" "}
                BẮT ĐẦU{" "}
              </Button>
            </View>

            <View style={{ top: "25%" }}>
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

export default Splash;
