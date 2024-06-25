import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule } from '@angular/forms';
import { TodoappComponent } from './todoapp/todoapp.component';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacToeComponent, HomeComponent, RouterModule, FormsModule, TodoappComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router) { }
  
}
