import {computed, makeObservable, observable} from "mobx";

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
  
  setToDoItem = (toDoElement: { id: number; done: boolean; body: string }) => {
    if (this.toDoListData?.includes(toDoElement)) {
      let deleteEl = this.toDoListData?.indexOf(toDoElement);
      this.toDoListData?.splice(deleteEl, 1);
    }
    this.toDoListData ? this.toDoListData.push(toDoElement) : [toDoElement];
  };
}
