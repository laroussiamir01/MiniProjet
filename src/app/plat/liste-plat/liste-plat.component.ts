import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-liste-plat',
  templateUrl: './liste-plat.component.html',
  styleUrls: ['./liste-plat.component.scss']
})
export class ListePlatComponent implements OnInit {
  qrCodeUrl: string | null = null;
  plats!: any[];

  constructor(
    private platService: PlatService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  searchTerm: string = '';

  ngOnInit() {
    this.platService.getAllPlats().subscribe((data) => {
      console.log('Data from API:', data);
      this.plats = data;
      console.log('Plats after assignment:', this.plats);
    });
  }

  get filteredPlats() {
    return this.plats.filter(
      (plat) =>
        plat.id.toString().includes(this.searchTerm) ||
        plat.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        plat.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        plat.price.toString().includes(this.searchTerm) ||
        (plat.vegetarian ? 'Oui' : 'Non').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        plat.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deletePlat(plat: any) {
    this.platService.deletePlat(plat).subscribe();
    this.openSnackBar('Plat supprimé avec succès', 'Fermer');
    window.location.reload();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  updatePlat(id: any) {
    this.router.navigate(['/dashboard/plat/updatePlat', id]);
  }

  details(id: any) {
    this.router.navigate(['/dashboard/plat/detailPlat', id]);
  }
}

