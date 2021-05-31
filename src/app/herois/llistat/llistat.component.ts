import { Component} from '@angular/core';

@Component({
  selector: 'app-llistat',
  templateUrl: './llistat.component.html',
  // styleUrls: ['./llistat.component.css']  --> Borrar si no s'utilitza
})
export class LlistatComponent {  //implements cicle de vida ngOnInit()

  herois: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  heroiMort: string = '';

  borrarHeroi(){
    
    this.heroiMort = this.herois.shift() || '';
    
    }

  }
  

