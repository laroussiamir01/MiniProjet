import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-detail-plat',
  templateUrl: './detail-plat.component.html',
  styleUrls: ['./detail-plat.component.scss']
})


export class DetailPlatComponent implements OnInit {

  @Input() plat: any;
  selectedMenu!: number;

  constructor(private platService: PlatService, private _snackBar: MatSnackBar,private router: Router) { }

  ngOnInit(): void {
    if (!this.plat) {
      this.platService.getPlatById(this.plat.id).subscribe(plat => {
        this.plat = plat;
      });
    }
  }

  affecterMenu() {
    if (this.selectedMenu) {
      this.platService.affecterMenutoPlat(this.selectedMenu, this.plat.id).subscribe(() => {   
        this.openSnackBar('Menu affecté avec succès', 'Fermer');
        this.plat.menu = { id: this.selectedMenu };
        this.selectedMenu = 0; 
        this.router.navigate(['/dashboard/plat/listePlat']);
      });
    }
  }

  desaffecterMenu() {
    if (this.plat.menu) {
      this.platService.desaffecterMenuDePlat(this.plat.menu.id, this.plat.id).subscribe(() => {
        window.alert('Menu désaffecté avec succès.');
        this.plat.menu = null;
        this.router.navigate(['/dashboard/plat/listePlat']);
      });
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000, 
    });
  }
}
