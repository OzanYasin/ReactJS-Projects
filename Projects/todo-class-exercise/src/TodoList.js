import React, { Component } from 'react';
import NewTodoFrom from './NewTodoFrom';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== id),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      // if the todo is not the one we're looking for, we just take it as is and put in it that array.
      // if it is the one we're looking for, we return a new object where we've changed the task.
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }

  toggleCompletion(id) {
    const completedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: completedTodos });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          completeToggle={this.toggleCompletion}
        />
      );
    });
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoFrom createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
