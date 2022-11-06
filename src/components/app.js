import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [
      { id: 1, label: "Buy some milk" },
      { id: 2, label: "Learn some react" },
    ],
    count : 2
  };

  updateTodoLabel = (todold, label) => {
    const { todos } = this.state;
    const todoIndex = todos.findIndex((t) => t.id === todold);
    const todosBefore = todos.slice(0, todoIndex);
    const todosAfter = todos.slice(todoIndex + 1);
    const newtodo = { ...todos[todoIndex], label };
    this.setState({
      todos: [...todosBefore, newtodo, ...todosAfter],
    });
  };

  addTask = () => {
    this.setState({ count: this.state.count + 1 });
    this.setState({
      todos: [
        ...this.state.todos,
        ...[{ id: this.state.count + 1, label: "New Task" }],
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <View style={styles.container}>
        <TodoList todos={todos} updateTodoLabel={this.updateTodoLabel} />
        <View style={styles.button}>
          <Button title="Taches" onPress={this.addTask} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
  button: {
    flex: 1,
    marginTop: 250,
  },
});

export default App;
