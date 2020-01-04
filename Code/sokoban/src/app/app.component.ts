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
  matrice de numere
  0 reprezinta nimic
  1 perete
  -1 reprezinta jucatorul
  matricea o sa reprezinte harta

  play() {
    var map = [
    [-1, 0, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1]
  ];

  var height = 7;
  var width = 7;

  up() {
    if ( player.y - 1 < 0 ) { return; }
    const nextY = player.y - 1;
    if (map[player.x][nextY] === 1) { return; }
    map[player.x][player.y] = 0;
    player.y -= 1;
    map[player.x][player.y] = -1;
  }
  }

  */

}
