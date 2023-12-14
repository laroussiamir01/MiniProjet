import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/services/plat.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.scss']
})
export class AddPlatComponent {
  addPlatForm: FormGroup;

  constructor(
    private platService: PlatService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.addPlatForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      vegetarian: [false],
      category: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.addPlatForm.valid) {
      const Data = this.addPlatForm.value;
  
      this.platService.addPlat(Data).subscribe(
        () => {
          this.router.navigate(['dashboard/plat/listePlat']);
          this.openSnackBar('Plat ajouté avec succès', 'Fermer');
        },
        (error) => {
          console.error('Error adding plat:', error);
          this.openSnackBar('Erreur lors de l\'ajout du plat', 'Fermer');
        }
      );
    } else {
      this.openSnackBar('Erreur lors de l\'ajout du plat', 'Fermer');
    }
  }
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
