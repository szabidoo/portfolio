import { Component } from '@angular/core';

/*
  Azért szerveztem ezt ki ide, mert nem szükséges, hogy minden chekcWinner
  futás esetén létrejöjjön. Lehetne a komponensosztály része mondjuk static readonly
  property-ként, de így maga az osztály kicsit jobban olvasható.
*/
const combos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css',
})
export class TicTacToeComponent {
  buttons: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string = '';
  // Az isDraw property nem volt használva.
  button = document.querySelector('button');

  makeMove(index: number){
    // Így első ránézésre érthető, hogy mi történik a metódus meghívásakor.
    const isFieldEmpty = !this.buttons[index];
    const hasGameEnded = this.winner;

    if (isFieldEmpty && !hasGameEnded){
      this.buttons[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.checkwinner();
    }
  }

  checkwinner(){
    // Itt csak kicsit egyszerűsítettem a for cikluson
    for (let [a, b, c] of combos){
      if (this.buttons[a] && this.buttons[a] === this.buttons[b] && this.buttons[a] === this.buttons[c]){
        this.winner = this.buttons[a];
        this.announceResult();
        return;
      }
    }

    if (!this.winner && this.buttons.every(button => button)){
      this.announceResult();
    }
  }

  reset_game(){
    this.buttons = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = '';
  }

  /*
    Két helyen volt alert hívás, és nem volt egységes (egyik helyen nem volt delay).
    Így, hogy ki lett szervezve saját metódusba a logika, ha változtatni szeretne rajta
    az ember, akkor elég egy helyen módosítani, egységes lesz.
  */
  private announceResult() {
    const message = !this.winner ? 'Draw!' : `Player ${this.winner} wins!`;
    setTimeout(() => alert(message), 100); // Delay the alert
  }
}
