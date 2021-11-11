import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ToDoItemView from "./ToDoItemView";

function ToDoItem({ item, toggleTaskCompleted, deleteTask }) {
  return (
    <ToDoItemView
      item={item}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  );
}

export default ToDoItem;
