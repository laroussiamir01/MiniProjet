import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataModel } from "../shared/data.model";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./shared/model/product.module";
import { ProductService } from "./shared/service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = []; // Assurez-vous que la variable products est déclarée comme un tableau de type Product[]

  productForm: FormGroup;

  product = new Product();

  productsModel: DataModel[];

  constructor(public productService: ProductService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.productForm = new FormGroup({});
    this.productsModel = [];
  }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];

    this.productForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });

    this.productsModel = [
      new DataModel('id', 'ID', 'number', true, []),
      new DataModel('ref', 'Référence', 'string', false, []),
      new DataModel('quantite', 'Quantité', 'number', false, []),
      new DataModel('prixUnitaire', 'Prix Unitaire', 'number', false, [])
    ];
  }
}
