import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext({
  todo: null,
  changeTodo: () => {},
});

const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("context does not exist");
  }

  return context;
};

export const useTodoContext = () => {
  const { todo, changeTodo } = useTodo();
  return { todo, changeTodo };
};

export const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState(null);

  const changeTodo = (text) => setTodo(text);

  const value = { todo, changeTodo };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
