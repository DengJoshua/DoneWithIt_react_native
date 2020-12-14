import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    bottom: 20,
  },
});

export default NewListingButton;
