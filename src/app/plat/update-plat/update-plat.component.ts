import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from 'src/app/model/plat';
import { PlatService } from 'src/app/services/plat.service'; 

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.scss']
})
export class UpdatePlatComponent implements OnInit {
  plat: Plat = new Plat();
  idPlat!: number;
  

  constructor(
    private platService: PlatService,
    private ac: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idPlat = this.ac.snapshot.params['idPlat']
    this.platService.getPlatById(this.idPlat).subscribe(
      (data) => {
        this.plat = data;
        },
          (error) => console.log(error)
        )
  }


  update() {
    this.platService.updatePlat(this.idPlat, this.plat)
      .subscribe(
        () => {
          this.openSnackBar('Plat modifié avec succès', 'Fermer');
          this.router.navigate(['/dashboard/plat/listePlat']);
        },
        (error) => {
          console.error('Erreur lors de la modification du plat :', error);
        }
      );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

