import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function ToDoItem({ item, toggleTaskCompleted, deleteTask }) {
  const backgroundColor = {
    backgroundColor: item.completed ? "#6e3b6e" : "#f9c2ff",
  };
  const textColor = { color: item.completed ? "white" : "black" };
  const icon = item.completed
    ? require("../assets/active-icon.png")
    : require("../assets/inactive-icon.png");

  return (
    <View style={[styles.card, backgroundColor]}>
      <TouchableOpacity onPress={toggleTaskCompleted}>
        <View style={[styles.label]}>
          <Image style={[styles.icon]} source={icon} resizeMode="contain" />
          <Text style={[styles.title, textColor]}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.fixToText]}>
        <Button
          title="Edit"
          accessibilityLabel={"Edit" + item.name}
          onPress={() => console.log("Edit Button pressed")}
        />
        <Button
          title="Delete"
          accessibilityLabel={"Delete" + item.name}
          color="tomato"
          onPress={deleteTask}
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
