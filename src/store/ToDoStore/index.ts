import { makeObservable, observable } from "mobx";

export class ToDoStore {
  toDoListData: { id: number; done: boolean; body: string }[] | null = null;

  constructor() {
    makeObservable(this, {
      toDoListData: observable,
    });
  }

  setToDoList = (toDoArr: { id: number; done: boolean; body: string }[]) => {
    this.toDoListData = toDoArr;
  };

}
