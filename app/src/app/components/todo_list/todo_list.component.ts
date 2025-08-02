import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo_list.component.html',
  styleUrls: ['./todo_list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}
