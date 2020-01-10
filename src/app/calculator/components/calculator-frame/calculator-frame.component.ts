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

  operator: string;
  result: number;
  isOperatorAdded = false;

  inputOneArray: number[] = [];
  inputOne: number;
  inputTwoArray: number[] = [];
  inputTwo: number;

  displayInput: string;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.displayCurrentInputsOrResultOrDefault();
  }

  // can only calculate two numbers now
  takeNumber(inputNumber: number) {
    if (!this.isOperatorAdded) {
      this.inputOneArray.push(inputNumber);
      this.displayCurrentInputsOrResultOrDefault(this.inputOneArray.join(''));
    } else {
      this.inputOne = this.mergeInputToOneNumber(this.inputOneArray);
      this.inputTwoArray.push(inputNumber);
      this.displayCurrentInputsOrResultOrDefault(this.inputTwoArray.join(''));
    }
  }

  takeOperator(operator: string) {
    this.operator = operator;
    this.isOperatorAdded = true;
  }

  computate() {
    this.inputTwoArray.join('');
    this.inputTwo = this.mergeInputToOneNumber(this.inputTwoArray);
    this.result = this.calculatorService
      .computateInputs(+this.inputOne, +this.inputTwo, this.operator);

    this.clearAll();
    this.takeNumber(this.result);
  }

  clearAll() {
    this.inputOneArray = [];
    this.inputTwoArray = [];
    this.isOperatorAdded = false;
    this.displayCurrentInputsOrResultOrDefault();
  }

  private displayCurrentInputsOrResultOrDefault(inputToDisplay?: any) {
    if (inputToDisplay) {
      this.displayInput = `${inputToDisplay}`;
    } else {
      this.displayInput = `0`;
    }
  }

  private mergeInputToOneNumber(input: any[]) {
    return +input.join('');
  }

}
