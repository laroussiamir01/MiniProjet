import {Component, OnInit} from '@angular/core';
import {CommandefService} from "../service/commandef.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProductService} from "../../product/shared/service/product.service";
import * as QRCode from 'qrcode';
import {Commande} from "../../commande/shared/model/commande.module";
@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.scss']
})
export class ListeCommandeComponent implements OnInit{
  qrCodeUrl: string | null = null;

  constructor(private commandefService: CommandefService,private productService : ProductService , private router:Router, private _snackBar: MatSnackBar){}
  commandes!:any;
  searchTerm: string = '';
  ngOnInit() {

    this.commandefService.getAll().subscribe((data) => {
      console.log('Data from API:', data);
      this.commandes = data;
      console.log('Commande after assignment:', this.commandes);
      this.generateQRCodeForCommande()


    });
  }
  generateQRCodeForCommande() {
    this.commandes.forEach((commande: any) => {
      const detailsBloc = {
        idCommande: commande.idCommande,
        nomCommandeur: commande.nomCommandeur,
        numTel: commande.numTel,
        product: commande.product,
      };

      QRCode.toDataURL(JSON.stringify(detailsBloc), (err, url) => {
        if (!err) {
          // Créez une propriété qrCodeUrl pour chaque bloc
          commande.qrCodeUrl = url;
        } else {
          console.error('Erreur lors de la génération du QR Code:', err);
        }
      });
    });
  }

  get filteCommandes() {
    return this.commandes.filter(
      (commande:Commande) =>
        commande.idCommande?.toString().includes(this.searchTerm) ||

        commande.produits?.nomProduit?.toLowerCase().includes(this.searchTerm.toLowerCase())||

        commande.numTel?.toString().includes(this.searchTerm) ||

        commande.nomCommandeur?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  update(id:any){
    this.router.navigate(['/dashboardEtudiant/commandef/updateCommande', id]);
  }
affecter(id:any){
    this.router.navigate(['/dashboardEtudiant/commandef/affecterProduit', id]);
  }

}
