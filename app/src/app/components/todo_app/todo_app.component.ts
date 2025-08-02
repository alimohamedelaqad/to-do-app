import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from '../todo_input/todo_input.component';
import { TodoListComponent } from '../todo_list/todo_list.component';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, TodoInputComponent, TodoListComponent],
  templateUrl: './todo_app.component.html',
  styleUrls: ['./todo_app.component.css']
})
export class TodoAppComponent {
  todos: Todo[] = [];

  addTodo(text: string) {
    this.todos.push({ id: Date.now(), text, completed: false });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
}
