import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-detail-bloc',
  templateUrl: './detail-bloc.component.html',
  styleUrls: ['./detail-bloc.component.scss']
})
export class DetailBlocComponent implements OnInit {
  bloc!:any;
  foyers: Foyer[] = [];
  selectedFoyer!: number;


  constructor(private route: ActivatedRoute, private blocService: BlocService ,
     private foyerService:FoyerService, 
     private router:Router
     , private _snackBar: MatSnackBar) {}
  ngOnInit(){
    this.loadFoyers();
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idBloc');
      if (idParam !== null) {
        const idBloc = +idParam; 
        this.blocService.getBlocById(idBloc).subscribe(bloc=> {
          this.bloc = bloc; 
        });
      } else {
       
      }
    });
  }

  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe(data => {
        this.foyers = data;
    });
}



openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000, 
  });
}

}
