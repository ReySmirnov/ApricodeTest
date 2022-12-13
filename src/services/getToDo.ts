import axios, {AxiosResponse} from "axios";

export type ToDoProps = { id: number, done: boolean, body: string }[];

export const getToDo = (): Promise<ToDoProps> =>
  axios
    .get("/api/toDoList")
    .then((response: AxiosResponse<ToDoProps>) => {
      return response.data;
    });
