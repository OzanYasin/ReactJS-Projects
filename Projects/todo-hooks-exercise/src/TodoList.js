import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

export default function TodoList({
  todos,
  removeTodo,
  toggleComplete,
  editTodo,
}) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.i}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}
