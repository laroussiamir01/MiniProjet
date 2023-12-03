import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { DataModel } from '../../data.model';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  @Input()
  title!: string;

  @Input()
  data!: any;

  @Input()
  service!: CrudService;

  @Input()
  initItem!: any;

  @Input()
  initForm!: FormGroup;

  @Input()
  dataModelList!: DataModel[];

  crudForm!: FormGroup;

  operation: string = 'add';

  selectedItem: any;
  reference: string='';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.init();
    this.loadData();
  }

  createForm() {
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadData() {
    this.service.getAll().subscribe(
        data => { this.data = data },
        error => { console.log('An error occurred.') },
        () => { console.log('Loading data was done.') }
    );
  }

  add() {
    const p = this.crudForm.value;
    this.service.add(p).subscribe(
        res => {
          this.init();
          this.loadData();
        }
    );
  }


  update() {
    this.service.update(this.selectedItem)
        .subscribe(
            res => {
              this.init();
              this.loadData();
            }
        );
  }

  init() {
    this.selectedItem = this.initItem;
    this.createForm();
  }

  delete() {
    this.service.delete(this.selectedItem.id).
    subscribe(
        res => {
          this.selectedItem = this.initItem;
          this.loadData();
        }
    );
  }
  searchByRef(): void {
    if (this.reference) {
      this.service.searchByRef(this.reference).subscribe(
        (data) => {
          this.data = data;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
    } else {
      // Si la description de recherche est vide, chargez toutes les questions
      this.fetchReponses();

    }
  }
  searchByNomC(): void {
    if (this.reference) {
      this.service.searchByNomC(this.reference).subscribe(
        (data) => {
          this.data = data;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
    } else {
      // Si la description de recherche est vide, chargez toutes les questions
      this.fetchReponses();

    }
  }
  private fetchReponses(): void {
    this.service.getAll().subscribe((data) => {
      this.data = data;
      // this.produits.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));

      console.log(data);
    })
  }
  getErrorMessage(columnName: string | undefined): string {
    if (!columnName) {
      return ''; // or some default message
    }

    const control = this.crudForm.get(columnName);

    if (!control) {
      return ''; // or some default message
    }

    if (control.hasError('required') && (control.dirty || control.touched)) {
      return `${columnName} is required`;
    }

    if (control.hasError('minlength') && (control.dirty || control.touched)) {
      return `${columnName} must be at least 3 characters`;
    }

    if (control.hasError('maxlength') && (control.dirty || control.touched)) {
      return `${columnName} cannot be more than 10 characters`;
    }

    return ''; // or some default message
  }


  protected readonly String = String;
}
