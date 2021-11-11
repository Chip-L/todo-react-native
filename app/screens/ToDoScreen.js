import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Form from "../components/Form";
import ToDoItem from "../components/ToDoItem";
import randomID from "../utils/randomID";

const DATA = [
  { id: "todo-" + randomID(), name: "Eat", completed: true },
  { id: "todo-" + randomID(), name: "Sleep", completed: false },
  { id: "todo-" + randomID(), name: "Repeat", completed: false },
];

function ToDoScreen(props) {
  const [tasks, setTasks] = useState(DATA);

  function addTask(name) {
    const newTask = { id: "task-" + randomID(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) =>
      id === task.id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }

  // console.log("\n------------\n\ntasks:\n", tasks);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, props.showLayout ? showBorders : {}]}>
        ToDoMatic
      </Text>
      <Form addTask={addTask} showLayout={props.showLayout} />

      <Text>filter button placeholder</Text>

      <Text>h2 for UL </Text>

      {/* <ToDoItem item={tasks[0]} toggleTaskCompleted={toggleTaskCompleted} />
      <ToDoItem item={tasks[1]} toggleTaskCompleted={toggleTaskCompleted} /> */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <ToDoItem
            item={item}
            toggleTaskCompleted={() => toggleTaskCompleted(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      />
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
    justifyContent: "flex-start",
    alignContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
  },
  title: {
    color: "rgb(77, 77, 77)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
});

export default ToDoScreen;
