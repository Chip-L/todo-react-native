import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Form(props) {
  return (
    <View style={styles.form}>
      <Text style={[styles.h2, props.showLayout ? showBorders : {}]}>
        What needs to be done?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {},
  h2: {
    color: "rgb(77, 77, 77)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default Form;
