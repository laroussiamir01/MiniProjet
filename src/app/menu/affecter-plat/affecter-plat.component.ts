import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';
import { PlatService } from 'src/app/services/plat.service';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-affecter-plat',
  templateUrl: './affecter-plat.component.html',
  styleUrls: ['./affecter-plat.component.scss']
})
export class AffecterPlatComponent implements OnInit {
  menus: any[] = [];
  plats: any[] = [];
  selectedMenuId: number = 0;
  selectedPlatId: number = 0;

  constructor(private menuService: MenuService, private platService: PlatService,private router:Router, private _snackBar: MatSnackBar,) {}

  ngOnInit() {
    this.menuService.getAllMenus().subscribe((data) => {
      this.menus = data;
    });

    this.platService.getAllPlats().subscribe((data) => {
      this.plats = data;
    });
  }

  affecterPlat() {
    if (this.selectedMenuId && this.selectedPlatId) {
      this.menuService.affecterPlatToMenu(this.selectedMenuId, this.selectedPlatId).subscribe(
        (response) => {
          console.log('Plat affecté au menu avec succès:', response);
            this.openSnackBar('Plat a éte affecté', 'Fermer');
          this.router.navigate(['/dashboard/menu/listeMenu']);
        },
        (error) => {
          console.error('Erreur lors de l\'affectation du plat au menu:', error);
        }
      );
    } else {
      console.error('Veuillez sélectionner un menu et un plat');
    }
  }
  desaffecterPlat() {
    if (this.selectedMenuId && this.selectedPlatId) {
      this.menuService.desaffecterPlatFromMenu(this.selectedMenuId, this.selectedPlatId).subscribe(
        (response) => {
          console.log('Plat désaffecté du menu avec succès:', response);
          this.openSnackBar('Plat a éte désaffecté', 'Fermer');
          this.router.navigate(['/dashboard/menu/listeMenu']);
        },
        (error) => {
          console.error('Erreur lors de la désaffectation du plat du menu:', error);
          this.router.navigate(['/dashboard/menu/listeMenu']);
        }
      );
    } else {
      console.error('Veuillez sélectionner un menu et un plat');
      this.router.navigate(['/dashboard/menu/listeMenu']);
    }
  }
    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    }
}
