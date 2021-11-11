import React, { useState } from "react";

// import my custom components
import ToDoItemEdit from "./ToDoItemEdit";
import ToDoItemView from "./ToDoItemView";

// this pretty much holds the state and decides how to handle editing  a task
function ToDoItem({ item, toggleTaskCompleted, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);

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
