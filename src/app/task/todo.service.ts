import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoKey = 'todo';
  todos: Todo[] = [];

  constructor() {}

  getAllTodos(): Todo[] {
    const cache = JSON.parse(localStorage.getItem(this.todoKey));
    return cache;
  }

  addTodo(todo: Todo) {
    let cache: Todo[] = []; // empty to fill later
    //pulling whole list adding then returning
    // checking array/ local host
    if (this.getAllTodos() === null) {
      // if nothing in list send something new
      cache.push(todo);
    } else {
      cache = this.getAllTodos(); //if something in list send something new
      cache.push(todo);
    }

    localStorage.setItem(this.todoKey, JSON.stringify(cache));
  }

  deleteTodo(todoIndex: number) {
    let cache: Todo[] = [];

    if (this.getAllTodos() === null) {
      // if nothing in list send something new
      return;
    } else {
      cache = this.getAllTodos(); //if something in list send something new
      cache.splice(todoIndex, 1);

      localStorage.setItem(this.todoKey, JSON.stringify(cache));
    }
    // this.todoArr = this.todoService.getAllTodos();
    // this.todos.splice(index, 1)
  }

  deleteTodos(todo: Todo) {
    // console.log(this.todoKey);
    localStorage.removeItem('todos');
    // this.todos.splice(index, 1)
  }

  editTodo(todoIndex: number, editTodo: Todo) {
    //get array from local storage  TODO INDEX LOGING 0 POSITION EACH TIME INSTEAD OF SELECTED
    let cache: Todo[] = [];

    if (this.getAllTodos() === null) {
      // if nothing in list send something new
      return;
    } else {
      cache = this.getAllTodos(); //if something in list send something new

      console.log(cache);
      console.log('todoIndex', todoIndex);
      cache.splice(todoIndex, 1, editTodo);
      console.log('string', editTodo);

      localStorage.setItem(this.todoKey, JSON.stringify(cache));
    }
  }
}
// delele todo @ index

// todos.splice(index, 1, updatedtodo)

// localstorage.setitem
// this.todos[index] = updatedTodo

//========================================

// taskKey = 'tasks'

// constructor() {

// this.getAllTasks()

// constructor(private http: HttpClient) {
// this.serviceURL = 'http://localhost:3000/tasks';

// addTask(task : Task) {

//   const cache: Task [] = this.getAllTasks()  //gets all the tasks

//   cache.push(task);

//   localStorage.setItem(this.taskKey, JSON.stringify(cache) )

//   // return this.http.post<Task>(this.serviceURL,task);
// }

// getAllTasks(): Task[]  {

//   const cache = localStorage.getItem(this.taskKey);

//   const allTasks = JSON.parse(cache)

//   return allTasks ?? []

// }

// deleteTask(task : Task) {
//   localStorage.removeItem(this.taskKey)

// }

// deleteTasks(task : Task) {  // clears all tasks

//   console.log(this.taskKey);
//   localStorage.removeItem('tasks')
// }

//     const cache: Task [] = this.getAllTasks()

//     cache.splice(task)

//     localStorage.removeItem(this.taskKey)
//  }

// editTask() {
//   // return this.http.put<Task>(this.serviceURL+'/'+task.id,task);
// }

// serviceURL : string ;

// serviceURL = 'https://codefi-todo-app-default-rtdb.firebaseio.com/';
// serviceURL = 'https://ng-recipe-book-2f9da-default-rtdb.firebaseio.com/:null';
