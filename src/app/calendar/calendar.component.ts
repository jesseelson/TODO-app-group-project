import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Day } from './day.model';
import { CreateCalendarService } from './create-calendar.service';

import { Todo } from '../task/todo.model';
import { TodoService } from '../task/todo.service';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root',
});

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  public monthDays: Day[];

  public monthNumber: number;
  public year: number;

  public weekDaysName = [];
  todoArr: Todo[];

  constructor(public createCalendar: CreateCalendarService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoArr = this.todoService.getAllTodos();

    this.setMonthDays(this.createCalendar.getCurrentMonth());

    this.weekDaysName.push('Monday');
    this.weekDaysName.push('Tuesday');
    this.weekDaysName.push('Wednesday');
    this.weekDaysName.push('Thursday');
    this.weekDaysName.push('Friday');
    this.weekDaysName.push('Saturday');
    this.weekDaysName.push('Sunday');
  }

  onNextMonth(): void {
    this.monthNumber++;
    if (this.monthNumber > 11) {
      this.monthNumber = 0;
      this.year++;
    }

    this.setMonthDays(
      this.createCalendar.getMonth(this.monthNumber, this.year)
    );

  }

  onPreviousMonth(): void {
    this.monthNumber--;
    if (this.monthNumber < 0) {
      this.monthNumber = 11;
      this.year--;
    }

    this.setMonthDays(
      this.createCalendar.getMonth(this.monthNumber, this.year)
    );
  }

  setMonthDays(days: Day[]): void {
    this.monthDays = days;
    this.monthNumber = this.monthDays[0].monthIndex;
    this.year = this.monthDays[0].year;
  }












}
