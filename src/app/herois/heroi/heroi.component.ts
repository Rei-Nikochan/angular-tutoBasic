import { Component } from "@angular/core";


@Component({
    selector:'app-heroi',
    templateUrl: 'heroi.component.html'
})
export class HeroiComponent{
     nom: string = 'Ironman';
    edat: number = 45;

    get nomMajuscules(): string{
        return this.nom.toUpperCase();
    }

    obtenirNom(): string{
        return `${this.nom} - ${this.edat}`;
    }

    cambiarNom(): void{
        this.nom = 'Spiderman';
    }

    cambiarEdat(): void{
        this.edat = 33;
    }
}