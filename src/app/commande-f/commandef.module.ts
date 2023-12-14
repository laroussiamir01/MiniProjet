import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CommandefRoutingModule} from "./commandef-routing.module";
import { AffecterProduitComponent } from './affecter-produit/affecter-produit.component';


@NgModule({
    imports: [ReactiveFormsModule,
        SharedModule, CommonModule, RouterOutlet, CommandefRoutingModule, FormsModule],
    declarations: [
   
    AffecterProduitComponent
  ]
})
export class CommandefModule{

}
