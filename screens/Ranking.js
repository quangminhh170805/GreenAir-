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
import Rank from "../components/Rank";

const Ranking = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ marginTop: StatusBar.currentHeight }}
        contentContainerStyle={{ paddingBottom: "15%" }}
      >
        <View style={styles.background}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={{ marginTop: "3%" }}>
              <Text
                style={{ fontWeight: "700", color: "#FFFFFF", fontSize: 20 }}
              >
                Xếp hạng
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={{ left: "5%", marginTop: "5%" }}>
            <Text style={{ fontSize: 24, fontWeight: "700" }}>
              # Các thành phố lớn
            </Text>
          </View>

          <View>
            <Rank />
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

export default Ranking;
