import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

function ProductCard({ item }) {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: item.image }}
      />
      <Text style={styles.title}>
        {item.name.length > 15
          ? item.name.substring(0, 15 - 3) + "..."
          : item.name}
      </Text>
      <Text style={styles.text}>${item.price}</Text>
      {item.countInStock > 0 ? (
        <Button title="Add" color={"green"} style={{ marginBottom: 12 }} />
      ) : (
        <Text>Currently Unavalible</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 8,
    marginHorizontal: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderRadius: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    padding: 5,
    marginBottom: 6,
    marginTop: 6,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "orange",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 12,
  },
});

export default ProductCard;
