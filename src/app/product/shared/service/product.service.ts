import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService{
  override url = '/product';

}
