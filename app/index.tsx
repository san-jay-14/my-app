import PaymentCard from "@/components/sections/bottomBar";
import BottomBar from "@/components/sections/bottomBar";
import CartItemsList from "@/components/sections/CartItemsList";
import TopBar from "@/components/sections/TopBar";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Add details */}
        <View style={styles.details}>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>
            Ordering for someone else?
          </Text>
          <Text style={styles.addDetailsText}>Add details</Text>
        </View>

        {/* coupon */}
        <View style={styles.coupon}>
          <Image
            source={require("../assets/images/discount.png")}
            width={20}
            height={20}
          />
          <View style={styles.couponTextContainer}>
            <Text style={styles.savedText}>79.97 saved!</Text>
            <Text style={styles.couponDescriptionText}>
              With applied coupon
            </Text>
          </View>
        </View>

        <CartItemsList />
      </ScrollView>

      {/* Fixed bottom bar */}
      <View style={styles.bottomBar}>
        <PaymentCard amount={1455} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
  },
  scrollContent: {
    paddingBottom: 120, // Space for the bottom bar
    alignItems: "center",
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
    paddingVertical: 20,
  },
  addDetailsText: {
    fontSize: 14,
    color: "#e45712",
    fontWeight: "900",
  },
  couponTextContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  savedText: {
    color: "#50b18e",
    fontWeight: "900",
    fontSize: 16,
  },
  couponDescriptionText: {
    color: "#50b18e",
    fontWeight: "semibold",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default Home;
