import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{ titol }}</h1>

    <h3>La base és:<strong> {{base}} </strong></h3>

    <button (click)="acumular(+base)"> +{{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(-base)"> -{{base}} </button>

    `
})

export class ContadorComponent{
    titol : string = 'Contador App';
    numero: number = 10;
    base  : number = 5;

    acumular(valor:number): void {
    this.numero += valor;
  }

}