import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  checkOperator(operator: string): string {
    switch(operator) {
      case '/':
        return '/';
      case 'x':
        return '*';
      case '-':
        return '-';
      case '+':
        return '+';
    }
  }

}
