import React from "react";
import { View, StyleSheet } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, updateTodoLabel }) => (
  <View style={styles.todosList}>
    {todos.map((todo) => (
      <Todo
        todo={todo}
        updateTodoLabel={(label) => updateTodoLabel(todo.id, label)}
        key={todo.id}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  todolist: {
    flex: 1,
    alignItems: "stretch",
  },
});

export default TodoList;
