import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from "react-native";

function ToDoScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDoMatic</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {},
});

export default ToDoScreen;
