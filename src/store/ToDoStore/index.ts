import { makeObservable, observable } from "mobx";
import {getToDoFilters} from "../../services/getToDo";

export class ToDoStore {
  toDoListData: { id: number; done: boolean; body: string }[] | null = null;
  toDoListFilter: getToDoFilters = {doneStatus:'all'}

  constructor() {
    makeObservable(this, {
      toDoListData: observable,
      toDoListFilter: observable,
    });
  }

  setToDoList = (toDoArr: { id: number; done: boolean; body: string }[]) => {
    this.toDoListData = toDoArr;
  };

  setCurrentFilter = (filter:getToDoFilters) => {
    this.toDoListFilter = filter
  }
}
