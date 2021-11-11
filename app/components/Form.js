import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Form({ addTask, showLayout }) {
  const [name, setName] = useState("");

  function handleOnPress() {
    if (name) {
      addTask(name);
      setName("");
    }
  }

  return (
    <View style={[styles.form, showLayout ? showBorders : {}]}>
      <Text style={[styles.h2, showLayout ? showBorders : {}]}>
        What needs to be done?
      </Text>
      <TextInput
        style={styles.input}
        autoComplete="off"
        onChangeText={setName}
        value={name}
      />
      <Button style={styles.button} title="Add" onPress={handleOnPress} />
    </View>
  );
}

const showBorders = {
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: 1,
};

const styles = StyleSheet.create({
  button: {
    // margin: 12,
    // padding: 10,
  },
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
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Form;
