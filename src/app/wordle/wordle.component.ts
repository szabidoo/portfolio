import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordle',
  standalone: true,
  // Lecseréltem a CommonModule-t NgStyle-ra, mivel csak azt használja a template (az ngFor-t lecseréltem itt is).
  imports: [FormsModule, NgStyle], // Import CommonModule here
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class WordleComponent {
  playgrounds = Array(5).fill(null).map(() => ({
    attempts: Array(5).fill('') // Assuming 5 attempts per playground
  }));

  inputValues: string[] = [];
  wordOfDay:string = 'asdel'; 
  activeP: number = 0;
  activeA: number = 0;
  colors: string[][] = Array(5).fill(null).map(() => new Array(this.wordOfDay.length).fill(''));
  color = '';
  state: boolean = false;

  getLetterColor(aIndex: number, pIndex: number): string {
    return this.colors[aIndex][pIndex] || 'transparent'; // Default to 'transparent' if no color is set
  }

  compareWords(){
    if(this.inputValues[this.activeA] === this.wordOfDay[this.activeA]){
      this.colors[this.activeA][this.activeP] = '#0af59f';
    }
    else if(this.wordOfDay.includes(this.inputValues[this.activeA]) && this.inputValues[this.activeA] !== this.wordOfDay[this.activeA]){
      this.colors[this.activeA][this.activeP] = 'yellow';
    }
  }

  isInputDisabled(pIndex: number, aIndex: number): boolean {
    
    if (pIndex == this.activeP && aIndex == this.activeA){
      return false
    }else return true
  }
 

  keyup(event: KeyboardEvent, playgroundIndex: number, attemptIndex: number) {
        
    if (event.target instanceof HTMLInputElement && event.target.value.length === 1) {
      let guess: string = event.target.value.toLowerCase();

      this.inputValues.push(guess);
      this.compareWords();
      
      this.activeA += 1;
      
      console.log(this.colors)

      setTimeout(() => {
        if (attemptIndex < this.playgrounds[playgroundIndex].attempts.length - 1) {
          // Focus next input in the same playground
          const nextInputId = `attempt${playgroundIndex}${attemptIndex + 1}`;
          const nextInput: HTMLElement | null = document.getElementById(nextInputId);
          nextInput?.focus();
        }
      }, 10);
      
      if (attemptIndex === 4){
        
        if(this.inputValues.join('') == this.wordOfDay){
          alert("Win")
          
          this.inputValues = [];
      
        }
        else if(this.inputValues.join('') !== this.wordOfDay){
          alert("Nem nyert!")
          this.inputValues = [];
          this.activeP += 1;
          this.activeA = 0;
        }

      }
      
    }
    
  }

}
