import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  computateInputs(inputOne: number, inputTwo: number, operator: string) {
    switch(operator) {
      case '/':
        return inputOne / inputTwo;
      case 'x':
        return inputOne * inputTwo;
      case '-':
        return inputOne - inputTwo;
      case '+':
        return inputOne + inputTwo;
    }
  }

}
