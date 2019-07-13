import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCheckerService {
  readonly votingAge = 16;//nu putem schimba valoarea acestor constante
  readonly drivingAge = 17;
  readonly drinkingAge = 18;

  canVote(age: number): boolean {
    return age >= this.votingAge;
  }
  canDrive(age: number): boolean {
    return age >= this.drivingAge;
  }
  canDrink(age: number): boolean {
    return age >= this.drinkingAge;
  }
  
}
