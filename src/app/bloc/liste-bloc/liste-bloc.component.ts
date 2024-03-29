import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/model/bloc';
import { Foyer } from 'src/app/model/foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';
import * as QRCode from 'qrcode';
@Component({
  selector: 'app-liste-bloc',
  templateUrl: './liste-bloc.component.html',
  styleUrls: ['./liste-bloc.component.scss']
})
export class ListeBlocComponent implements OnInit {
  qrCodeUrl: string | null = null;


  constructor(private foyerService: FoyerService,private blocService : BlocService , private router:Router, private _snackBar: MatSnackBar){}
  blocs!:any;

  searchTerm: string = '';
  ngOnInit() { 

    this.blocService.getAllBlocs().subscribe((data) => {
      console.log('Data from API:', data);
      this.blocs = data;
      console.log('Blocs after assignment:', this.blocs);   
       this.generateQRCodeForbloc();
    
       

    });
  }


  
  generateQRCodeForbloc() {
    this.blocs.forEach((bloc: any) => {
      const detailsBloc = {
        idBloc: bloc.idBloc,
        nomBloc: bloc.nomBloc,
        capaciteBloc: bloc.capaciteBloc,
      };
  
      QRCode.toDataURL(JSON.stringify(detailsBloc), (err, url) => {
        if (!err) {
          // Créez une propriété qrCodeUrl pour chaque bloc
          bloc.qrCodeUrl = url;
        } else {
          console.error('Erreur lors de la génération du QR Code:', err);
        }
      });
    });
  }


  get filteBlocs() {
    return this.blocs.filter(
      (bloc:Bloc) =>
        bloc.idBloc.toString().includes(this.searchTerm) ||
        bloc.foyer?.nomFoyer
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())||
        bloc.capaciteBloc.toString().includes(this.searchTerm) ||
        bloc.nomBloc
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase())
      
    );


  }
  deleteBloc(bloc:Bloc){
    this.blocService.deleteBloc(bloc).subscribe(); 
    this.openSnackBar('Bloc supprimé avec succès', 'Fermer');
    window.location.reload();
    
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }
  updateBloc(id:any){
    this.router.navigate(['/dashboard/bloc/updateBloc', id]);
  }
  details(id:any){
    this.router.navigate(['/dashboard/bloc/detailBloc', id]);
  }


}
