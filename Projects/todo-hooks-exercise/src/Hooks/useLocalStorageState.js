import { useEffect, useState } from 'react';

export default function UseLocalStorageState(key, defaultVal) {
  // make piece of state, based off of value in localstorage (or default)
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  // use useEffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

// const [todos, setTodos] = UseLocalStorageState('todos', [])
