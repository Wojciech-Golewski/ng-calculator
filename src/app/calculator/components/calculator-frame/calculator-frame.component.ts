import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator-frame',
  templateUrl: './calculator-frame.component.html',
  styleUrls: ['./calculator-frame.component.scss']
})
export class CalculatorFrameComponent implements OnInit {

  numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  operatorList: string[] = ['/', 'x', '-', '+'];

  constructor(
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
  }

  takeNumber(number: number) {
    console.log(number);
  }

  computate() {
    console.log('computating');
  }

  takeOperator(operator: string) {
    const correctOperator = this.calculatorService.checkOperator(operator);
    console.log(correctOperator);
    console.log(typeof correctOperator);
  }

}
