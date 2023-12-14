import {Component, OnInit} from '@angular/core';
import {Product} from "../../product/shared/model/product.module";
import {CommandefService} from "../service/commandef.service";
import {ProductService} from "../../product/shared/service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.scss']
})
export class UpdateCommandeComponent implements OnInit{
  commande!:any;
  products: Product[] = [];
  selectedProduct!: number;
  constructor(private commandefService:CommandefService ,
              private productService:ProductService,  private ac : ActivatedRoute
    , private router: Router  , private _snackBar: MatSnackBar){}

  ngOnInit() {

    this.loadProducts();
    this.ac.paramMap.subscribe(next=>this.commandefService.getById(Number(next.get('id')))
        .subscribe(res=>{this.commande=res}),
      error=>console.log(error));
  }

  update() {
    this.commandefService.update(this.commande).subscribe();
    this.openSnackBar('Commande modifié avec succès', 'Fermer');
    this.router.navigate(['/dashboardEtudiant/commandef/listCommande']);

  }

  loadProducts() {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }
/*
  affecterFoyerAuBloc() {
    console.log('foyer'+this.selectedFoyer);
    if (this. && this..idBloc && this.selectedFoyer) {
      this.commandefService.affecterFoyerBloc(this.selectedFoyer,this..idBloc)
        .subscribe(
          response => {
            console.log(response);
            this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
            this.router.navigate(['/dashboard/bloc/listBloc']);

          },
          error => {
            //  console.error("Erreur lors de l'affectation du foyer au bloc :", error);

          }
        );
    } else {
      this.openSnackBar('Erreur lors de l affectation du foyer au bloc ', 'Fermer');

    }
    this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
    this.router.navigate(['/dashboard/bloc/listBloc']);

  }
  desaffecterFoyerDuBloc() {
    if (this. && this..idBloc) {
      this.commandefService.desaffecterFoyerBloc(this..idBloc).subscribe(
        (response: any) => {
          console.log(response);
          this.openSnackBar('Foyer desaffecté avec succès', 'Fermer');
          this.router.navigate(['/dashboard/bloc/listBloc']);
        },
        (error) => {
          console.error("Erreur lors de la désaffectation du foyer du bloc :", error);

        }
      );
    } else {

      this.openSnackBar('Erreur lors de désaffectation', 'Fermer');
    }
  }*/

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
