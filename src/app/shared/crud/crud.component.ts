import {Component, Input, OnInit} from '@angular/core';
import { CrudService } from '../crud.service';
import { DataModel } from '../data.model';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit{
  constructor(private http: HttpClient) {
    this.title = '';
    this.service = new CrudService(http);
    this.initForm = new FormGroup({});
    this.dataModelList = [];
  };
  @Input()
  title: string;

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  @Input()
  dataModelList: DataModel[];

  crudType = 'sample';


  ngOnInit(){
  }

  dataChanged($event: DataModel[]) {
    this.data = this.data.concat($event);
  }
}
