import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sokoban';

  undo() {
    console.log('Undo');
  }

  redo() {
    console.log('Redo');
  }

  restart() {
    console.log('Restart');
  }

  up() {
    console.log('Up');
  }

  down() {
    console.log('Down');
  }

  left() {
    console.log('Left');
  }

  right() {
    console.log('Right');
  }

  /*
  fac o matrice de numere
  0 de ex reprezinta jucatorul
  1 perete
  2 cubulet etc
  -1 valoare pentru spatiile goale
  matricea o sa reprezinte harta

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  var M = [][];
  var m;
  var n;
  for (let i = 0; i < n; i ++) {
      for(let j = 0; j < n; j++) {
        M[i][j] = getRandomInt(-1, 10);
      }
  }

  up() {
    if(M[i][j][ == [i][-1]) {
      M[i][j] = ;
    }
    console.log('Up');
  }

  */

}
