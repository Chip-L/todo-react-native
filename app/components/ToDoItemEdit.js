import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function ToDoItem({ item, editTask, cancelEdit }) {
  const [newName, setNewName] = useState(item.name);

  const backgroundColor = {
    backgroundColor: item.completed ? "#6e3b6e" : "#f9c2ff",
  };
  const textColor = { color: item.completed ? "white" : "black" };

  function handleSave() {
    editTask(item.id, newName);
    setNewName("");
    cancelEdit();
  }

  return (
    <View style={[styles.card, backgroundColor]}>
      <View>
        <View style={[styles.label]}>
          <TextInput
            style={[styles.title, textColor]}
            onChangeText={setNewName}
            value={newName}
          />
        </View>
      </View>
      <View style={[styles.fixToText]}>
        <Button
          title="Cancel"
          accessibilityLabel={"Cancel renaming"}
          onPress={cancelEdit}
          color="tomato"
        />
        <Button
          title="Save"
          accessibilityLabel={`Save new name for ${item.name}`}
          onPress={handleSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,

    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  icon: {
    height: 32,
    width: 32,
    flex: 0,
  },
  title: {
    fontSize: 32,
  },

  fixToText: {
    justifyContent: "space-between",
  },
});

export default ToDoItem;
