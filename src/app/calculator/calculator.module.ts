import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorFrameComponent } from './components/calculator-frame/calculator-frame.component';


@NgModule({
  declarations: [CalculatorFrameComponent],
  imports: [
    CommonModule,
    CalculatorRoutingModule
  ]
})
export class CalculatorModule { }
