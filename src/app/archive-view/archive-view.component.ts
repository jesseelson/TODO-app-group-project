import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Injectable } from '@angular/core';

import { NgForm } from '@angular/forms';

Injectable({
  providedIn: 'root',
});

@Component({
  selector: 'app-archive-view',
  templateUrl: './archive-view.component.html',
  styleUrls: ['./archive-view.component.css'],
})
export class ArchiveViewComponent implements OnInit {
  key: any;
  todoArr: Todo[] = [];

  public addTaskValue: string = '';
  showValidationErrors: boolean;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoArr = this.todoService.getAllTodos();

    // this.todoFullArray.forEach((todo) => {
    //   console.table(todo);
    //   // console.log(todo.isArchived)
    //   if (todo.isCompleted) {
    //     this.todoDoneArray.push(todo);
    //     console.table(this.todoDoneArray);
    //   }
    // });

    // this.todoArr = this.todoService.getAllTodos();
  }
  //  *ngIf="todo.isCompleted === true"

  // addTodo(form: NgForm) {

  //     let thisTodo: Todo = {
  //       text: form.value.text,
  //       details: form.value.details,
  //       isCompleted: false
  //     }
  //     this.todoService.addTodo(thisTodo)

  //     form.reset()
  //     this.todoArr = this.todoService.getAllTodos();
  //   }

  deleteTodo(todo: Todo) {
    this.todoArr = this.todoService.getAllTodos();
  }

  onEditTodo() {
    this.todoArr = this.todoService.getAllTodos();
    console.log('onEditTodo emitted');
  }
}
