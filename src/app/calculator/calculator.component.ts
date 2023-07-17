import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})
export class CalculatorComponent {
    toShow = '0';
    currentVal = '';
    isThemeChanged: boolean = false;
    themeText: string = 'Dark Theme'

    ChangeTheme(){
      this.isThemeChanged = !this.isThemeChanged;
      this.themeText = this.isThemeChanged? 'Light Theme' : 'Dark Theme';
    }
    
    // Injecting calculator service through constructor
    constructor(private calculatorService: CalculatorService){}

    // Writes the pressed button value to display of calculator
    WriteToInput(value: string){
      this.currentVal = this.currentVal + value;
      this.toShow = this.currentVal;
    }
    // Evaluates the expression in the display of calculator
    Evaluate(){
      this.toShow = this.calculatorService.evaluateExpression(this.toShow);
      this.currentVal = this.toShow;
    }
    // Clears display of calculator
    Clear(){
      this.currentVal = '';
      this.toShow = '0';
    }
    // Clears one digit backwards in the display of calculator
    Back(){
      this.currentVal = this.currentVal.toString().slice(0, -1);
      this.toShow = this.currentVal;
      if(this.toShow == ''){this.toShow = '0'}
    }
    // Calculates the expression when the expression written manually in the text box(display of calculator)
    calcvalue(solve:any){
      if(solve.charAt(0) == '0'){
        solve = solve.slice(1,);
      }
      this.toShow = this.calculatorService.evaluateExpression(solve);
    }
}
