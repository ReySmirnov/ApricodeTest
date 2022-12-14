import axios, { AxiosResponse } from "axios";

export type ToDoProps = { id: number; done: boolean; body: string }[];

export const getToDo = (): Promise<ToDoProps> =>
  axios.get("/api/toDoList").then((response: AxiosResponse<ToDoProps>) => {
    return response.data;
  });

export const markDoneToDo = (id: number): Promise<ToDoProps> =>
  axios
    .get(`/api/toDoList/${id}/done`)
    .then((res: AxiosResponse<ToDoProps>) => {
      return res.data;
    });

export const markUnDoneToDo = (id: number): Promise<ToDoProps> =>
  axios
    .get(`/api/toDoList/${id}/unDone`)
    .then((res: AxiosResponse<ToDoProps>) => {
      return res.data;
    });

export const deleteToDo = (id:number):Promise<ToDoProps> =>
    axios.post(`/api/toDoList/${id}/delete`).then((res:AxiosResponse<ToDoProps>)=>{
        return res.data
    })
