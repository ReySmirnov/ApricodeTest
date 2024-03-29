import axios, { AxiosResponse } from "axios";

export type ToDoProps = { id: number; done: boolean; body: string }[];

export type getToDoFilters = { doneStatus?: DoneStatus };
export type DoneStatus = "done" | "undone" | "all";

export const getToDo = (filter?: getToDoFilters): Promise<ToDoProps> =>
  axios
    .get("/api/toDoList", { params: filter })
    .then((res: AxiosResponse<ToDoProps>) => {
      return res.data;
    });

export const setToDoStatus = (id: number, done: boolean): Promise<ToDoProps> =>
  axios
    .get(`/api/toDoList/${id}/${done ? "undone" : "done"}`)
    .then((res: AxiosResponse<ToDoProps>) => {
      return res.data;
    });

export const deleteToDo = (id: number): Promise<ToDoProps> =>
  axios
    .post(`/api/toDoList/${id}/delete`)
    .then((res: AxiosResponse<ToDoProps>) => {
      return res.data;
    });

export const addToDo = (body: { inputToDo: string }): Promise<ToDoProps> =>
  axios.post("/api/toDoList", body).then((res: AxiosResponse<ToDoProps>) => {
    return res.data;
  });
