import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biggestElem';
  //O functie care returneaza cel mai mare element dintr-o lista

  biggest(list: Array<number>): number {
    if (list === null || list.length === 0) {
      return null;
    }
    let biggestElem = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > biggestElem) {
        biggestElem = list[i];
      }
    }
    console.log(biggestElem);
    return biggestElem;
  }

  //o functie care inverseaza o lista

  reverse(list: number[]): number[] {
    if (list === null || list.length === 0) {
      return list;
    }
    const reversedList = [];
    for (let i = list.length - 1; i >= 0; i--) {
      reversedList.push(list[i]);
    }
    console.log(reversedList);
    return reversedList;
  }

  //O functie care calculeaza cele 2 solutii ale ecuatiei de gradul 2
  solveSecondDegreeEquation(a: number, b: number, c: number): number[] {
    if (a === 0) {
      throw new Error("a must not be equal to zero.");
    }

    const delta = b ^ 2 - 4 * a * c;

    if (delta < 0) {
      throw new Error("The solutions are not real");
    }

    const s1 = (-b + Math.sqrt(delta)) / (2 * a);
    const s2 = (-b - Math.sqrt(delta)) / (2 * a);
    if (s1 != s2) {
      return [s1, s2];
    }
    else return [s1];
  }
}
