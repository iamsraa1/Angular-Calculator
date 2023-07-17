import { Injectable } from "@angular/core";

@Injectable()

export class CalculatorService{
    // Evaluates general calculations
    evaluateExpression(expression: string){
        return eval(expression);
    }

    // sin function
    sin(value: string){
        return Math.sin(parseFloat(value));
    }

    // cos function
    cos(value: string){
        return Math.cos(parseFloat(value));
    }

    // tan function
    tan(value: string){
        return Math.tan(parseFloat(value));
    }

    // log function
    log(value: string){
        return Math.log(parseFloat(value));
    }

    // pi value
    pi(){
        return 3.14159265359;
    }

    // squre value
    square(value: string){
        return Math.pow(parseFloat(value), 2);
    }

    // factorial function
    factorial(value: string){
        var instance, number, factorial;
        factorial = 1;
        number = parseInt(value);
        for(instance=1; instance<=number; instance++){
            factorial = factorial * instance;
        }
        return factorial;
    }
}