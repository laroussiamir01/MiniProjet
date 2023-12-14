import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';
interface MyResponse {
  message : string; // La propriété message est optionnelle pour gérer différents types de réponses
}

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.scss']
})

export class UpdateBlocComponent implements OnInit {
  bloc!:any;
  foyers: Foyer[] = [];
  selectedFoyer!: number;
    constructor(private blocService:BlocService ,
    private foyerService:FoyerService,  private ac : ActivatedRoute 
    , private router: Router  , private _snackBar: MatSnackBar){}
 
  ngOnInit() { 
    this.loadFoyers();
    this.ac.paramMap.subscribe(next=>this.blocService.getBlocById(Number(next.get('idBloc')))
    .subscribe(res=>{this.bloc=res}), 
    error=>console.log(error));
  }
  update(){
    this.blocService.updateBloc(this.bloc.idBloc,this.bloc).subscribe();
    this.openSnackBar('Bloc modifié avec succès', 'Fermer');
    this.router.navigate(['/dashboard/bloc/listBloc']);
  }
  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe(data => {
        this.foyers = data;
    });
}

// affecterFoyerAuBloc() {
//   console.log('foyer'+this.selectedFoyer);
//   if (this.bloc && this.bloc.idBloc && this.selectedFoyer) {
//     this.blocService.affecterFoyerBloc(this.selectedFoyer,this.bloc.idBloc)
//       .subscribe(
//         response => {
//           console.log(response);
//           this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
//           this.router.navigate(['/dashboard/bloc/listBloc']);
          
//         },
//         error => {
//         console.error("Erreur lors de l'affectation du foyer au bloc :", error);
          
//         }
//       );
//   } else {
//     this.openSnackBar('Erreur lors de l affectation du foyer au bloc ', 'Fermer');
   
//   }
//   this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
//   this.router.navigate(['/dashboard/bloc/listBloc']);
  
// }



affecterFoyerAuBloc() {
  console.log('foyer' + this.selectedFoyer);
  if (this.bloc && this.bloc.idBloc && this.selectedFoyer) {
      this.blocService.affecterFoyerBloc(this.selectedFoyer, this.bloc.idBloc)
          .subscribe(
              (response: MyResponse | string) => {
                  if (typeof response === 'string') {
                      // Si c'est une chaîne, cela pourrait être une erreur
                      this.openSnackBar(response, 'Fermer');
                  } else {
                      // Vérifiez si la propriété 'message' existe dans la réponse
                      if ('message' in response && response.message === "mrygl") {
                          this.openSnackBar('Foyer affecté au bloc avec succès', 'Fermer');
                          this.router.navigate(['/dashboard/bloc/listBloc']);
                      } else {
                          this.openSnackBar('mch mrygl', 'Fermer');
                      }
                  }
              },
              error => {
                  console.error('Erreur lors de la requête :', error);

                  if (error.error && error.error.message) {
                      this.openSnackBar(error.error.message, 'Fermer');
                  } else {
                      this.openSnackBar('Erreur lors de l affectation du foyer au bloc ', 'Fermer');
                  }
              }
          );
  } else {
      this.openSnackBar('Erreur lors de l\'affectation du foyer au bloc', 'Fermer');
  }
}



desaffecterFoyerDuBloc() {
  if (this.bloc && this.bloc.idBloc) {
    this.blocService.desaffecterFoyerBloc(this.bloc.idBloc).subscribe(
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
}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }
}
