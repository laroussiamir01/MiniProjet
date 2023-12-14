import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {ProductFrontComponent} from "./product-front.component";
import {ProductFrontRoutingModule} from "./product-front-routing.module";

@NgModule({
  imports: [ReactiveFormsModule,
    SharedModule, CommonModule, RouterOutlet, ProductFrontRoutingModule, FormsModule],
  declarations: [
    ProductFrontComponent
  ]
})
export class ProductFrontModule{

}
