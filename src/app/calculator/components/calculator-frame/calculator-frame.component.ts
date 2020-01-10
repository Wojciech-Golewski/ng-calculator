import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-frame',
  templateUrl: './calculator-frame.component.html',
  styleUrls: ['./calculator-frame.component.scss']
})
export class CalculatorFrameComponent implements OnInit {

  numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  operators: string[] = ['/', 'x', '-', '+'];

  inputList: number[] = [];
  operator: string;
  result: number;
  numberPlaceholder: string[] = [];
  operatorAdded: boolean = false;

  inputOne: number[] = [];
  firstInput: number;
  inputTwo: number[] = [];

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
  }

  takeNumber(number: number) {
    if (this.operatorAdded) {
      this.firstInput = +this.inputOne.join('');
      this.inputTwo.push(number)
    } else {
      this.inputOne.push(number);
    }
  }

  takeOperator(operator: string) {
    this.operator = operator;
    this.operatorAdded = true;
  }

  computate() {
    this.inputTwo.join('');
    this.result = this.calculatorService.computateInputs(+this.firstInput, +this.inputTwo, this.operator);
    console.log(this.result);
  }

}
