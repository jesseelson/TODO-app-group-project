import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/task/todo.model';
import { TodoService } from 'src/app/task/todo.service';

@Component({
  selector: 'app-archived-item',
  templateUrl: './archived-item.component.html',
  styleUrls: ['./archived-item.component.css'],
})
export class ArchivedItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() todoIndex: number;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  etodo: Todo = {
    text: '',
    details: '',
    isCompleted: false,
    isArchived: false,
    children: [],
    duedate: null,
    // id: null,
  };

  constructor(private todoService: TodoService) {}

  editedText: string = '';
  detailsText: string = '';
  duedateDate: Date;

  ngOnInit(): void {}

  onEditClicked(todoIndex: number) {
    // this.todo.text = this.editedText;
    // this.todo.details = this.detailsText;
    // this.todoService.editTodo(todoIndex, this.etodo);
    // this.editClicked.emit();
    // console.log('onEditClicked');
  }

  //May not work
  onComplete(todo) {
    // todo.isCompleted = true;
    // this.todoService.editTodo(this.todoIndex, todo)
    // TODO: Call methods on the todo service to persist the completed todo
  }

  // TODO: This should be aclled by the template delete button
  onDelete(todo) {
    console.log('delete todo #' + this.todoIndex);
    this.todoService.deleteTodo(this.todoIndex);
    this.deleteClicked.emit();

    // this.todoArr = this.todoService.getAllTodos();
    // console.log(this.deleteClicked)
  }

  onArchive(todo) {
    // this.todo.isArchived = true;
    // this.todoService.editTodo(this.todoIndex, todo);
    // this.editClicked.emit();
    // console.log('onArchive clicked');
  }

  // close() {
  //   this.close();
  // }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;

    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };

    // this.dialogRef.close(updatedTodo)
  }
}
