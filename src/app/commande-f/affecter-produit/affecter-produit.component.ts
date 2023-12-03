import {Component, OnInit} from '@angular/core';
import {Product} from "../../product/shared/model/product.module";
import {CommandefService} from "../service/commandef.service";
import {ProductService} from "../../product/shared/service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Commande} from "../../commande/shared/model/commande.module";

@Component({
  selector: 'app-affecter-produit',
  templateUrl: './affecter-produit.component.html',
  styleUrls: ['./affecter-produit.component.scss']
})
export class AffecterProduitComponent implements OnInit{
  commande!:Commande;
  produits: Product[] = [];
  selectedProduct!: number;
  constructor(private commandefService:CommandefService ,
              private productService:ProductService,  private ac : ActivatedRoute
      , private router: Router  , private _snackBar: MatSnackBar){}

  ngOnInit() {
    this.loadProducts();
    this.ac.paramMap.subscribe(
        next => {
          this.commandefService.getById(Number(next.get('id')))
              .subscribe(
                  res => {
                    this.commande = res;
                  },
                  error => {
                    console.log('Error fetching command:', error);
                  }
              );
        },
        error => {
          console.log('Error fetching parameter:', error);
        }
    );
  }

  loadProducts() {
    this.productService.getAll().subscribe(
        data => {
          this.produits = data;
          console.log('Products loaded:', this.produits);
        },
        error => {
          console.error('Error loading products:', error);
        }
    );
  }



  affecterProduitAuCommande() {
    if (this.commande && this.commande.idCommande && this.selectedProduct) {
      this.commandefService.affecterProduitCommande(this.commande.idCommande, this.selectedProduct)
          .subscribe(
              response => {
                console.log(response);
                if (response === "produit successfully assigned to commande.") {
                  this.openSnackBar('produit affecté au commande avec succès', 'Fermer');
                  this.router.navigate(['/dashboardEtudiant/commandef/listCommande']);
                } else {
                  this.openSnackBar('Erreur lors de l affectation du produit au commande ', 'Fermer');
                }
              },
              error => {
                console.error("Erreur lors de l'affectation du produit au commande :", error);
                this.openSnackBar('Erreur lors de l affectation du produit au commande ', 'Fermer');
              }
          );
    } else {
      this.openSnackBar('Erreur lors de l affectation du produit au commande ', 'Fermer');
    }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
