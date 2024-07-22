import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { WordleComponent } from './wordle/wordle.component';



export const routes: Routes = [ 
    { path: 'home', component: HomeComponent }, 
    { path: 'tictac', component: TicTacToeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'todo', component: TodoappComponent},
    { path: 'wordle', component: WordleComponent}

];
