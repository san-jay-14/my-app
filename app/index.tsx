import PaymentCard from "@/components/sections/bottomBar";
import BottomBar from "@/components/sections/bottomBar";
import CartItemsList from "@/components/sections/CartItemsList";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Add details */}
      <View style={styles.details}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          Ordering for someone else?
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#e45712",
            fontWeight: "900",
          }}
        >
          Add details
        </Text>
      </View>

      {/* coupon */}
      <View style={styles.coupon}>
        <Image
          source={require("../assets/images/discount.png")}
          width={20}
          height={20}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#50b18e",
              fontWeight: "900",
              fontSize: 16,
            }}
          >
            79.97 saved!
          </Text>
          <Text
            style={{
              color: "#50b18e",
              fontWeight: "semibold",
            }}
          >
            With applied coupon
          </Text>
        </View>
      </View>

      <CartItemsList />
      <PaymentCard amount={1455} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
  },
  text: {
    fontSize: 20,
  },
  coupon: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#ddfbef",
    padding: 16,
    width: "95%",
    borderRadius: 18,
    marginBottom: 24,
    borderWidth: 2,
    borderColor: "#73bfb2",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    marginBottom: 30,
    borderRadius: 18,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default Home;
