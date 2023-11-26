import {Component, OnInit} from '@angular/core';

import {ProductService} from "../shared/service/product.service";

@Component({
  selector: 'app-product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.scss']
})
export class ProductFrontComponent implements OnInit {
  produits!: any;
  // refSearch: string='';
  reference: string='';



  constructor(
      private productService: ProductService,
      // private router: Router,
  ) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.produits = data;
      console.log(data);
    });
  }
  searchByRef(): void {
    if (this.reference) {
      this.productService.searchByRef(this.reference).subscribe(
        (data) => {
          this.produits = data;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
    } else {
      // Si la description de recherche est vide, chargez toutes les questions
      this.fetchReponses();

    }
  }private fetchReponses(): void {
    this.productService.getAll().subscribe((data) => {
      this.produits = data;
      // this.produits.sort((a, b) => compareAsc(new Date(b.dateAjoutQ), new Date(a.dateAjoutQ)));

      console.log(data);
    })
  }
}
