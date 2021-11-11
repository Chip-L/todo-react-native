import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import ToDoItemEdit from "./ToDoItemEdit";
import ToDoItemView from "./ToDoItemView";

function ToDoItem({ item, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

  console.log("isEditing:", isEditing);

  return isEditing ? (
    <ToDoItemEdit
      item={item}
      editTask={editTask}
      cancelEdit={() => setIsEditing(false)}
    />
  ) : (
    <ToDoItemView
      item={item}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      setEdit={() => setIsEditing(true)}
    />
  );
}

export default ToDoItem;
