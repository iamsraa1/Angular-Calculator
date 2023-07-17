import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ScientificCalculatorComponent } from './sci-calculator/sci-calculator.component';

const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'Sci-Cal', component: ScientificCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
