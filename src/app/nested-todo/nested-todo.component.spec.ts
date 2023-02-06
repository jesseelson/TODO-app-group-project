import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedTodoComponent } from './nested-todo.component';

describe('NestedTodoComponent', () => {
  let component: NestedTodoComponent;
  let fixture: ComponentFixture<NestedTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedTodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
