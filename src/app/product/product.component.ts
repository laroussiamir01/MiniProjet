import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataModel } from "../shared/data.model";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./shared/model/product.module";
import { ProductService } from "./shared/service/product.service";
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productchart!: any;
  chart: any;
  @ViewChild('myChart') myChart!: ElementRef;

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
      nomProduit: ['', [Validators.required,Validators.minLength(3)]],
      quantite: ['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]],
      prixUnitaire: ['',[Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]],
    });

    this.productsModel = [
      new DataModel('idProduit', 'ID', 'number', true, []),
      new DataModel('nomProduit', 'Nom Produit', 'string', false, []),
      new DataModel('quantite', 'Quantité', 'number', false, []),
      new DataModel('prixUnitaire', 'Prix Unitaire', 'number', false, [])
    ];
    this.productService.getAll().subscribe((data) => {
      this.productchart = data;

      // Extraire les noms des foyers
      const labels = this.productchart.map((foyer: Product) => foyer.nomProduit);

      // Extraire les capacités des foyers
      const capacities = this.productchart.map((foyer: Product) => foyer.prixUnitaire);

      // Créer le graphique avec les données actualisées
      this.createChart(labels, capacities);
    });
  }
  createChart(labels: string[], data: number[]) {
    const ctx = this.myChart.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Prix ',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
          },
        },
      },
    });
  }
}
