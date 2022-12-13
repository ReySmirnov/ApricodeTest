import React, { createContext, PropsWithChildren } from "react";
import { ToDoStore } from "../../store/ToDoStore";

const toDoStore = new ToDoStore();

export const ToDoData = createContext(toDoStore);

export const ToDoContext = (props: PropsWithChildren) => {
  return (
    <ToDoData.Provider value={toDoStore}>{props.children}</ToDoData.Provider>
  );
};
