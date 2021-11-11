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

function ToDoItem({ item, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log("isEditing:", isEditing);
  return (
    <ToDoItemView
      item={item}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      setEdit={() => setIsEditing(!isEditing)}
    />
  );
}

export default ToDoItem;
