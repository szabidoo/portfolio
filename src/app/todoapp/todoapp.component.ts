import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [FormsModule, NgFor],
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
    console.log(this.tasks);
  }

  removeTask(i: number, task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
