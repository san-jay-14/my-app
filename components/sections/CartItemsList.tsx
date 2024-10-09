import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isEligible: boolean;
  customizable: boolean;
}

const CartItemsList: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Momo Mid Pizza Veg",
      description: "Personal, Pan",
      price: 560,
      quantity: 2,
      isEligible: true,
      customizable: true,
    },
    {
      id: "2",
      name: "Chatpata Chicken Feast",
      description: "Personal, Pan",
      price: 196,
      quantity: 1,
      isEligible: false,
      customizable: true,
    },
    {
      id: "3",
      name: "Classic Corn",
      description: "Personal, Pan",
      price: 121,
      quantity: 1,
      isEligible: true,
      customizable: true,
    },
    {
      id: "4",
      name: "Tandoori Paneer Pasta",
      description: "Zesty Paneer Pocket : Flat Rs ...",
      price: 314,
      quantity: 1,
      isEligible: true,
      customizable: true,
    },
  ]);

  const updateQuantity = (id: string, increment: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + increment) }
          : item
      )
    );
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/images/veg.png")}
          style={{ width: 15, height: 15, marginTop: 4 }}
        />
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          {item.customizable && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.customizeText}>Customize</Text>
              <Image
                source={require("../../assets/images/down.png")}
                style={{ width: 15, height: 15, marginTop: 4 }}
              />
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
        }}
      >
        {/* Counter */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Price */}
        <View style={styles.itemPriceQuantity}>
          <Text style={styles.itemPrice}>₹{item.price * item.quantity}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["white", "#e7fcf5"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.header}>SWIGGYIT eligible items</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    width: "95%",
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#3f9876",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  itemInfo: {
    flexDirection: "row",
    flex: 1,
  },
  eligibleDot: {
    color: "#00C853",
    marginRight: 8,
    fontSize: 20,
  },
  itemName: {
    fontSize: 14,
    fontWeight: "semibold",
  },
  itemDescription: {
    fontSize: 12,
    color: "gray",
  },
  customizeText: {
    color: "black",
    fontSize: 10,
    fontWeight: "bold",
    marginTop: 4,
  },
  itemPriceQuantity: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderColor: "#e6efec",
    height: 35,
    width: 75,
  },
  quantityButton: {
    fontSize: 20,
    paddingHorizontal: 4,
    color: "#00C853",
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 6,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default CartItemsList;
