import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoappComponent } from './todoapp/todoapp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TicTacToeComponent, HomeComponent, RouterModule, FormsModule, TodoappComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // A title és a router nem volt használva
}
