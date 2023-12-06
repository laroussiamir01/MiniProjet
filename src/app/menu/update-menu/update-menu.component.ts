import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/model/menu';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.scss']
})
export class UpdateMenuComponent implements OnInit {
  menu: Menu = new Menu();
  idMenu!: number;

  constructor(
    private menuService: MenuService,
    private ac: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.idMenu = this.ac.snapshot.params['idMenu'];
    this.menuService.getMenuById(this.idMenu).subscribe(
      (data) => {
        this.menu = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update() {
    this.menuService.updateMenu(this.idMenu, this.menu).subscribe(
      () => {
        this.openSnackBar('Menu modifié avec succès', 'Fermer');
        this.router.navigate(['/dashboard/menu/listeMenu']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}