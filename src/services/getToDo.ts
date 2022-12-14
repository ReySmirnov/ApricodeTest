import axios, { AxiosResponse } from "axios";

export type ToDoProps = { id: number; done: boolean; body: string }[];

export type getToDoFilters = {doneStatus?:'done'|'undone'|'all'}

export const getToDo = (filter?:getToDoFilters): Promise<ToDoProps> =>
  axios.get("/api/toDoList", {params:filter}).then((res: AxiosResponse<ToDoProps>) => {
    return res.data;
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

export const addToDo = (body:{inputToDo:string}):Promise<ToDoProps> =>
    axios.post("/api/toDoList", body ).then((res:AxiosResponse<ToDoProps>)=>{
        return res.data
    })

