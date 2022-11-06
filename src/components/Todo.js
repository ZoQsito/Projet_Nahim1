// src/components/Todo.js
import React, { Fragment } from "react";
import { Text, StyleSheet, View, Button, TextInput, TouchableOpacity } from "react-native";
import { Component } from "react";

class Todo extends Component {
  state = {
    editMode: false,
    label: this.props.todo.label,
  };

  onChange = (label) => {
    this.setState({ label });
  };

  renderEditMode = () => {
    const { label } = this.state;
    return (
      <Fragment>
        <TextInput
          style={[styles.editInput, styles.todoLabel]}
          value={label}
          onChangeText={this.onChange}
          autoFocus
        />
        <Button title="Save" onPress={this.onSavePress} />
        <Button title="Cancel" onPress={this.onCancelPress} />
      </Fragment>
    );
  };

  onSavePress = () => {
    const { updateTodoLabel } = this.props;
    const { label } = this.state;
    updateTodoLabel(label);
    this.setState({ editMode: false });
  };

  onCancelPress = () => {
    this.setState({
      editMode: false,
      label: this.props.todo.label,
    });
  };

  onValidatePress = () => {
    const { updateTodoLabel } = this.props;
    const { label } = this.state;
    updateTodoLabel(label + "   ✅");
    this.setState({
      editMode: false,
    });
  };

  renderViewMode = () => {
    const { todo } = this.props;
    return (
      <Fragment>
        <TouchableOpacity onPress={this.onValidatePress}>
          <Text style={styles.todoLabel}>{todo.label}</Text>
        </TouchableOpacity>
        <Button title="Edit" onPress={this.onEditPress} />
      </Fragment>
    );
  };

  render() {
    const { editMode } = this.state;
    return (
      <View style={styles.todo}>
        {editMode ? this.renderEditMode() : this.renderViewMode()}
      </View>
    );
  }

  onEditPress = () => {
    this.setState({
      editMode: true,
    });
  };
}
const styles = StyleSheet.create({
  todo: {
    padding: 10,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "lightgray",
  },
});

export default Todo;
