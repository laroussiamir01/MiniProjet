import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {ProductService} from "../shared/service/product.service";
import * as QRCode from "qrcode";

@Component({
  selector: 'app-product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.scss']
})
export class ProductFrontComponent implements OnInit {
  produits!: any;
  // refSearch: string='';
  reference: string='';
  qrCodeUrl: string | null = null;

  constructor(
      private productService: ProductService,
      // private router: Router,
  ) {
  }

  ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      this.produits = data;
      console.log(data);
      this.generateQRCodeForProduct()
    });

  }

  generateQRCodeForProduct() {
    this.produits.forEach((produit: any) => {
      const detailsBloc = {
        idProduit: produit.idProduit,
        nomProduit: produit.nomProduit,
        quantite: produit.nomProduit,
        prixUnitaire: produit.prixUnitaire,

      };

      QRCode.toDataURL(JSON.stringify(detailsBloc), (err, url) => {
        if (!err) {
          // Créez une propriété qrCodeUrl pour chaque bloc
          produit.qrCodeUrl = url;
        } else {
          console.error('Erreur lors de la génération du QR Code:', err);
        }
      });
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
      console.log(data);
    })
  }
}
