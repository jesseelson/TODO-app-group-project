import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
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
  duedateField: Date;

  ngOnInit(): void {}

  onEditClicked(todoIndex: number) {
    this.etodo.text = this.editedText;
    this.etodo.details = this.detailsText;
    this.etodo.duedate = this.duedateField;
    this.todoService.editTodo(todoIndex, this.etodo);
    this.editClicked.emit();
    console.log('onEditClicked');
  }

  //May not work
  // onComplete(todo: Todo) {
  //   // console.table(this.todo);
  //   setTimeout(() => {
  //     this.todo.isArchived = true;
  //     this.todoService.editTodo(this.todoIndex, todo);
  //     this.editClicked.emit();
  //   }, 1000);
    // TODO: figure out why it's targeting the top ToDo and not the one who's checkbox is being clicked.
  // }

  // TODO: This should be aclled by the template delete button
  onDelete(todo: Todo) {
    console.log('delete todo #' + this.todoIndex);
    this.todoService.deleteTodo(this.todoIndex);
    this.deleteClicked.emit();

    // this.todoArr = this.todoService.getAllTodos();
    // console.log(this.deleteClicked)
  }

  onComplete(todo: Todo) {
    this.todo.isCompleted = true;
    setTimeout(() => {
    this.onArchive(this.todo)
    }, 1000)
  }

  onArchive(todo: Todo) {
    this.todo.isArchived = true;
    this.todoService.editTodo(this.todoIndex, todo);
    this.editClicked.emit();
    console.log('Todo Archived');
  }

  close() {
    this.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;

    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };

    // this.dialogRef.close(updatedTodo)
  }
}
