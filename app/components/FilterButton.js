import React from "react";
import { Button } from "react-native";

function FilterButton({ name, setFilter }) {
  return (
    <Button
      onPress={setFilter}
      title={name}
      accessibilityLabel={`Show ${name} tasks`}
    />
  );
}

const styles = StyleSheet.create({
  button: {},
});

export default FilterButton;
