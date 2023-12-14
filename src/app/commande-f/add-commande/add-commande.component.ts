import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommandeService} from "../../commande/shared/service/commande.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommandefService} from "../service/commandef.service";

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})
export class AddCommandeComponent implements OnInit{
  addCommandefForm: FormGroup;
  idEtudiant!:any;

  constructor(
    private commandefService: CommandefService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar)
  {
    this.addCommandefForm = this.formBuilder.group({
      nomCommandeur: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      numTel: ['', [Validators.required,Validators.pattern('^[0-9]+$'), Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {

    this.idEtudiant=localStorage.getItem("id");
  }

  onSubmit() {
    if (this.addCommandefForm.valid) {
      const commandeData = this.addCommandefForm.value;

      this.commandefService.passerCommande(commandeData,this.idEtudiant).subscribe(() => {
          this.router.navigate(['dashboardEtudiant/commandef/listCommande']);
          this.openSnackBar('Commande ajouté avec succès', 'Fermer');
        },
        (error) => {
          // console.error('Erreur lors de l\'ajout du bloc : ', error);
          this.openSnackBar('Erreur lors de l\'ajout du Commande', 'Fermer');
        }
      );
    }
    else{
      this.openSnackBar('Erreur lors de l\'ajout du Commande', 'Fermer');
    }

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}


