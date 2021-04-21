import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import data from "../../assets/data/products.json";
import ProductList from "./ProductList";

function Productcontainer() {
  //handle Last Row

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <View
      style={{ marginTop: -52, marginBottom: Platform.OS === "ios" ? 70 : 170 }}
    >
      <FlatList
        numColumns={2}
        style={{ height: "100%" }}
        data={products}
        renderItem={({ item }) => <ProductList item={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default Productcontainer;
