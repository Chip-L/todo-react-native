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

// import my custom components
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import ToDoItem from "../components/ToDoItem";

// import utility files
import randomID from "../utils/randomID"; //generates a random 12 character id

// Sample data that should come in from a database.
const DATA = [
  { id: "todo-" + randomID(), name: "Eat", completed: true },
  { id: "todo-" + randomID(), name: "Sleep", completed: false },
  { id: "todo-" + randomID(), name: "Repeat", completed: false },
];

// These constants are out here so they don't update with the App page refresh.
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function ToDoScreen(props) {
  // set state objects
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState("All");

  // create button list for the filters (ToDo: Add colors for the buttons - maybe make them pressable)
  const fliterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      color={name === filter ? "transparent" : ""}
      setFilter={() => setFilter(name)}
    />
  ));

  // create task list - filtering it just the 1 time here and then using this in several places
  const taskList = tasks.filter(FILTER_MAP[filter]);

  // create heading for the task list - this will indicate if 0 items are in the list
  const taskListHeading = `${taskList.length} ${
    filter !== "All" ? filter : ""
  } ${taskList.length === 1 ? "task" : "tasks"} remaining`;

  /* ** FUNCTIONS TO MANIPULATE THE TASKS ** */
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

  function editTask(id, newName) {
    // if this task has the same ID as the edited task
    const editedTaskList = tasks.map((task) =>
      id === task.id ? { ...task, name: newName } : task
    );
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // At last, the component to be returned, this will display the main screen
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, props.showLayout ? showBorders : {}]}>
        ToDoMatic
      </Text>
      <Form addTask={addTask} showLayout={props.showLayout} />

      <View style={styles.filterList}>{fliterList}</View>

      <Text style={styles.h2}>{taskListHeading}</Text>
      <FlatList
        data={taskList}
        renderItem={({ item }) => (
          <ToDoItem
            item={item}
            toggleTaskCompleted={() => toggleTaskCompleted(item.id)}
            deleteTask={() => deleteTask(item.id)}
            editTask={editTask}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
  },
  filterList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h2: {
    color: "rgb(77, 77, 77)",
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    marginTop: 10,
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
