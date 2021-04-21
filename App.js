import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProductContainer from "./screen/Products/Productcontainer";
import Header from "./shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProductContainer />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});
