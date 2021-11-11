import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";
import nanoid from "../utils/nanoid";

const DATA = [
  { id: "todo-" + nanoid(), name: "Eat", completed: true },
  { id: "todo-" + nanoid(), name: "Sleep", completed: false },
  { id: "todo-" + nanoid(), name: "Repeat", completed: false },
];

function ToDoScreen(props) {
  const [tasks, setTasks] = useState(DATA);

  function addTask(name) {
    console.log(name);
    const newTask = { id: "task-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  console.log(tasks);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, props.showLayout ? showBorders : {}]}>
        ToDoMatic
      </Text>
      <Form addTask={addTask} showLayout={props.showLayout} />

      <Text>filter button placeholder</Text>

      <Text>h2 for UL </Text>

      <ToDoItem item={DATA[1]} showLayout={props.showLayout} />
    </SafeAreaView>
  );
}

const showBorders = {
  borderColor: "red",
  borderStyle: "solid",
  borderWidth: 1,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
  },
  title: {
    color: "rgb(77, 77, 77)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ToDoScreen;
