import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface PaymentCardProps {
  amount: number;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ amount }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.paymentMethod}>
          <Image
            source={require("../../assets/images/google-pay-icon.png")}
            style={{ width: 30, height: 30 }}
          />
          <View>
            <Text style={styles.paymentMethodText}>Pay using</Text>
            <Text style={styles.googlePayText}>Google Pay</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <Text style={styles.changeText}>Change {">"}</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#149e6a", "#1db17a"]}
        style={styles.sliderContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={styles.sliderText}>Slide to Pay | ₹{amount}</Text>
        <View style={styles.sliderButton}>
          <Text style={styles.sliderButtonText}>{">"}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

interface Styles {
  card: ViewStyle;
  header: ViewStyle;
  paymentMethod: ViewStyle;
  paymentMethodText: TextStyle;
  googlePayContainer: ViewStyle;
  googlePayText: TextStyle;
  changeText: TextStyle;
  sliderContainer: ViewStyle;
  sliderText: TextStyle;
  sliderButton: ViewStyle;
  sliderButtonText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 100, height: 100 },
    shadowOpacity: 200,
    shadowRadius: 100,
    elevation: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  paymentMethodText: {
    fontSize: 14,
  },
  googlePayContainer: {
    backgroundColor: "#E8F5E9",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  googlePayText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  changeText: {
    fontSize: 14,
    color: "#FF9800",
    fontWeight: "bold",
  },
  sliderContainer: {
    borderRadius: 30,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 4,
  },
  sliderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sliderButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderButtonText: {
    color: "#00C853",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default PaymentCard;
