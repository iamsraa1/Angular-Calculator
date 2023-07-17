import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ButtonShadowDirective } from './directives/button-shadow.directive';
import { ScientificCalculatorComponent } from './sci-calculator/sci-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonShadowDirective,
    ScientificCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
