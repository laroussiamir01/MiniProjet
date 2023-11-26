import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';

import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import {RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ProductRoutingModule} from "./product-routing.module";
import { ProductFrontComponent } from './product-front/product-front.component';

@NgModule({
  imports: [ReactiveFormsModule,
    SharedModule, CommonModule,RouterOutlet,ProductRoutingModule],
  declarations: [
    ProductComponent,

  ]
})
export class ProductModule{

}
