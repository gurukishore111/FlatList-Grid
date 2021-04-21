import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri:
            "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/shopping_cart.png",
        }}
        resizeMode="contain"
        style={{ height: 40, top: Platform.OS === "ios" ? 35 : 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "#fff",
    top: -63,
    height: Platform.OS === "ios" ? 110 : 160,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Header;
