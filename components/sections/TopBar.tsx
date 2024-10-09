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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          paddingTop: 16,
        }}
      >
        <Image
          source={require("../../assets/images/nav-arrow.png")}
          style={{ width: 20, height: 20 }}
        />
        <Text style={styles.savedText}>35 - 40 mins to clg |</Text>
        <Text
          style={{
            fontSize: 12,
          }}
        >
          Academic Block, Iiit Kotta...
        </Text>
        <Image
          source={require("../../assets/images/down.png")}
          style={{ width: 20, height: 20 }}
        />
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
    fontSize: 16,
    fontWeight: "bold",
  },
});
