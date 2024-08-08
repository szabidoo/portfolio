import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { WordleComponent } from './wordle/wordle.component';

export const routes: Routes = [ 
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent }, 
    { path: 'tictac', component: TicTacToeComponent },
    { path: 'todo', component: TodoappComponent},
    { path: 'wordle', component: WordleComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full'},
    //Ez a route arra jó, hogy ha nem létező route-ot ír be az ember, akkor a home-ra navigáljon az app ne az üres route-ra
];
