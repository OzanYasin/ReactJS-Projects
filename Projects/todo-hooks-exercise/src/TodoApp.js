import React, { useEffect } from 'react';
import useTodoState from './Hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { AppBar, Paper, Toolbar, Typography, Grid } from '@mui/material';

export default function TodoApp() {
  const initialTodos = [];
  const { todos, addTodo, removeTodo, toggleComplete, editTodo } =
    useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fff',
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODO WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

//  - TodoApp
//      - TodoForm
//      - TodoList
//          - TodoItem

// id, task, completed
