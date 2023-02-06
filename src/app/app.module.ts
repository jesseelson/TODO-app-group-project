import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AuthComponent } from './auth/auth.component';
import { ArchivedItemComponent } from './archived-item/archived-item.component';
import { ArchiveViewComponent } from './archive-view/archive-view.component';
import { NestedTodoComponent } from './nested-todo/nested-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    NavigationComponent,
    TodoItemComponent,
    AuthComponent,
    ArchivedItemComponent,
    ArchiveViewComponent,
    NestedTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
