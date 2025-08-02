import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from './components/todo_app/todo_app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day5';

  inputValue: string = '';


  todos: { text: string; completed: boolean }[] = [];


  addTodo(value: string) {
    if (value.trim()) {
      this.todos.push({ text: value, completed: false });
      this.inputValue = '';
    }
  }


  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }


  toggleComplete(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
