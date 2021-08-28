import { Component  } from "@angular/core";

@Component({
    selector:'app-contador',
    template: `
            <h1>Esta es otra forma</h1>
            <h3>La base es: <strong> {{base}}</strong> </h3>

            <button (click)="acumular(base)"> + {{base}} </button>
            <span> {{numero2}} </span>
            <button (click)="acumular(-base)"> - {{base}}</button>
    `
})
export class ContadorComponent{

    titulo = 'Este un contador';
    sumado: number = 3+5; // se puede representar otras expresiones directamente en el html
  
    numero1: number = 10;
    numero2: number = 20;
  
    sumar(){
      this.numero2 += 1;
    }
  
    restar(){
      this.numero2 -= 1;
    }
  
  
    acumular(valor: number){
      this.numero2 += valor;
  
    }
  
  
    base:number = 5;
  

}