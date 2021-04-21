import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProductCard from "./ProductCard";

function ProductList({ item }) {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <ProductCard item={item} />
    </TouchableOpacity>
  );
}

export default ProductList;
