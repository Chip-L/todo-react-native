import React from "react";
import { Button, StyleSheet, View } from "react-native";

function FilterButton({ name, color, setFilter }) {
  return (
    <View style={styles.button}>
      <Button
        onPress={setFilter}
        color={color}
        title={name}
        accessibilityLabel={`Show ${name} tasks`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 5,
  },
});

export default FilterButton;
