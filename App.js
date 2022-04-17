import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import { TouchableOpacity } from "react-native-web";

import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    console.log(task);
    setTasks([...tasks, task]);
    setTask("");
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={task} />
            </TouchableOpacity>
          ))}
          {/* <Task text="Clean room" />
          <Task text="Go to gym" /> */}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: "#fff",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 60,
  },
  addWrapper: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {},
});
