export class Todo {
  isCompleted = false;
  isArchived = false;
  children?: Task[];


  // id: number = 0;

  constructor(public text: string, public details: string = '', public duedate?: Date) {}
}
