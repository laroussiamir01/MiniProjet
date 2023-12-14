import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeChambre } from 'src/app/model/typeChambre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss'],
})
// export class AddChambreComponent {
//   addCh: FormGroup;
//   typeChambre = TypeChambre;

//   constructor(private fb: FormBuilder, private chService: ChambreService , private router:Router) {
//     this.addCh = this.fb.group({
//       numeroChambre: ['', Validators.required, , Validators.min(1)],

//       typeC: ['', Validators.required], // Initialisez à null
//     });
//   }

//   onSubmit() {
//     if (this.addCh.valid) {
//       const ch = this.addCh.value;
//       this.chService.addChambre(ch).subscribe((data) => {
//         console.log(data);
//         alert('Chambre ajoutée avec succès');
//         this.router.navigate(['/dashboard/gestion-chambre/allch']);

//       });
//     }
//   }
// }
export class AddChambreComponent {
  addCh: FormGroup;
  typeChambre = TypeChambre;

  constructor(private fb: FormBuilder, private chService: ChambreService, private router: Router) {
    this.addCh = this.fb.group({
      numeroChambre: ['', [Validators.required, Validators.min(1), this.numeroChambreValidator]],

      typeC: ['', Validators.required], // Initialisez à null
    });
  }

  onSubmit() {
    if (this.addCh.valid) {
      const numeroChambreControl = this.addCh.get('numeroChambre');

      if (numeroChambreControl) {  // Vérifiez que numeroChambreControl n'est pas null
        const numeroChambreValue = numeroChambreControl.value;

        if (numeroChambreValue && numeroChambreValue.toString().length <= 3) {
          const ch = this.addCh.value;
          this.chService.addChambre(ch).subscribe((data) => {
            console.log(data);
            alert('Chambre ajoutée avec succès');
            this.router.navigate(['/dashboard/gestion-chambre/allch']);
          });
        } else {
          // Si la validation échoue, mettez à jour la valeur avec null
          numeroChambreControl.setValue(null);
          console.log('Erreur: Numéro de Chambre doit avoir 3 chiffres ou moins.');
        }
      } else {
        console.log('Erreur: numeroChambreControl est null.');
      }
    }
  }


  numeroChambreValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const value = control.value;
    if (value && value.toString().length > 3) {
      return { 'invalidNumeroChambre': true };
    }
    return null;
  }
}

