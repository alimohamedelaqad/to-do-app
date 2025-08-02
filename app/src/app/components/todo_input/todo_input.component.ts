import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo_input.component.html',
  styleUrls: ['./todo_input.component.css']
})
export class TodoInputComponent {
  inputValue = '';
  @Output() add = new EventEmitter<string>();

  onAdd() {
    if (this.inputValue.trim()) {
      this.add.emit(this.inputValue);
      this.inputValue = '';
    }
  }
}
