import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CommandeComponent} from "./commande.component";
import {CommandeRoutingModule} from "./commande-routing.module";


@NgModule({
  imports: [ReactiveFormsModule,
    SharedModule, CommonModule,RouterOutlet,CommandeRoutingModule],
  declarations: [
    CommandeComponent
  ]
})
export class CommandeModule{

}
