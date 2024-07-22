import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css',
})
export class TicTacToeComponent {
  buttons: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string = '';
  isDraw: boolean = false;
  button = document.querySelector('button');

  makeMove(index: number){
    if (!this.buttons[index] && !this.winner){
      this.buttons[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.checkwinner();

    }
  }

  checkwinner(){
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of combos){
      const [a, b, c] = combo;
      if (this.buttons[a] && this.buttons[a] === this.buttons[b] && this.buttons[a] === this.buttons[c]){
        this.winner = this.buttons[a];
        setTimeout(() => alert(`Player ${this.winner} wins!`), 100); // Delay the alert
        return;
    
      }
    }

    if (!this.winner && this.buttons.every(button => button)){
      this.isDraw = true;
      alert('Draw!');
    }

    
  }

  reset_game(){
    this.buttons = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = '';
    this.isDraw = false;
  }
}
