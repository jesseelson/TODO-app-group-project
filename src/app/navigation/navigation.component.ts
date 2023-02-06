import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  collapsed: boolean = true;
  show: boolean = false;

  constructor(
    private todoService: TodoService,
    private authService: AuthService
  ) {}

  // taskArr: Task[];  // similar to myBooks[]

  // public addTaskValue: string = '';

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user; // checking is user is true, logged in.
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  // deleteTasks() {   // clear all tasks

  //   this.taskService.deleteTasks(new Task(this.addTaskValue))
  //   // this.taskArr = this.taskService.getAllTasks();
  // }
}
