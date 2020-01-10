import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorFrameComponent } from './components/calculator-frame/calculator-frame.component';


const routes: Routes = [
  {
    path: '',
    component: CalculatorFrameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
