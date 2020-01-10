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
  operatorAdded: boolean = false;

  inputOne: number[] = [];
  firstInput: number;
  secondInput: number;
  inputTwo: number[] = [];

  shownInput: string;

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
  }

  takeNumber(number: number) {
    if (!this.operatorAdded) {
      this.inputOne.push(number);
      this.displayCurrentInputsOrComputation(this.inputOne.join(''));
    } else {
      this.firstInput = this.mergeFullInput(this.inputOne);
      this.inputTwo.push(number)
      this.displayCurrentInputsOrComputation(this.inputTwo.join(''));
    }
  }

  takeOperator(operator: string) {
    this.operator = operator;
    this.operatorAdded = true;
  }

  computate() {
    this.inputTwo.join('');
    this.secondInput = this.mergeFullInput(this.inputTwo);
    this.result = this.calculatorService.computateInputs(+this.firstInput, +this.secondInput, this.operator);
    console.log(this.result);
    this.displayCurrentInputsOrComputation(this.result);

    this.clearInputs();
  }

  private displayCurrentInputsOrComputation(inputToDisplay: any) {
    this.shownInput = `${inputToDisplay}`;
  }

  private mergeFullInput(input: any[]) {
    return +input.join('');
  }

  private clearInputs() {
    this.inputOne = [];
    this.inputTwo = [];
    this.operatorAdded = false;
  }

}
