import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.topBar}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          borderBottomWidth: 1,
          borderBottomColor: "#e6e6e6",
          paddingBottom: 20,
          width: "100%",
        }}
      >
        <Image
          source={require("../../assets/images/back.png")}
          width={20}
          height={20}
        />
        <Text style={styles.title}>Pizza Hut</Text>
      </View>
      <View>
        <Text style={styles.savedText}>
          You saved ₹79.97 with applied coupon
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    padding: 16,
    backgroundColor: "white",
    marginBottom: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
  },
  savedText: {
    fontSize: 14,
    color: "#8c8c8c",
  },
});
