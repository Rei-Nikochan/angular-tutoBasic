import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroiComponent } from './heroi/heroi.component';
import { LlistatComponent } from './llistat/llistat.component';


@NgModule({
    declarations: [
        HeroiComponent,
        LlistatComponent

    ],

    exports: [    // ? Quines coses volem ver visibles
        LlistatComponent
    ],

    imports: [    // ? Aquí van mòduls
        CommonModule
    ]

})
export class HeroisModule {

}