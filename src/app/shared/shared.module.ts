import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { SampleComponent } from './crud/sample/sample.component';
import {CommonModule} from "@angular/common";



@NgModule({
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  declarations: [
    CrudComponent,
    SampleComponent,

  ],
  exports: [CrudComponent,
    SampleComponent,

    ]
})
export class SharedModule{

}
