import { Injectable } from '@angular/core';

import { CrudService } from '../../../shared/crud.service';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService{
  override url = '/product';
  searchByRef(ref: string): Observable<any> {
    return this.http.get(environment.api_url + this.url + '/search', {params: {ref: ref}});
  }
  deletep(id:any): Observable<any>{
    return this.http.delete(environment.api_url + this.url + `/${id}`);
  }

}
