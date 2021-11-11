import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

function Form(props) {
  const [task, setTask] = useState("See ME!");

  console.log(props);
  return (
    <View style={[styles.form, props.showLayout ? showBorders : {}]}>
      <Text style={[styles.h2, props.showLayout ? showBorders : {}]}>
        What needs to be done?
      </Text>
      <TextInput
        style={styles.input}
        autoComplete="off"
        onChangeText={setTask}
        value={task}
      />
    </View>
  );
}

const showBorders = {
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: 1,
};

const styles = StyleSheet.create({
  form: {
    alignContent: "center",
    marginVertical: 10,
  },
  h2: {
    color: "rgb(77, 77, 77)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    // marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;
