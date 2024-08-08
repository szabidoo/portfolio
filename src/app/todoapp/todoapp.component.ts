import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {
  newtask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newtask.trim()) {
      this.tasks.push(this.newtask.trim());
      this.newtask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
