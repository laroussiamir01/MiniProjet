import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-reponse',
  templateUrl: './edit-reponse.component.html',
  styleUrls: ['./edit-reponse.component.scss']
})
export class EditReponseComponent {
  editedDescription: string;
  errorMessage: string = '';

  constructor(
      public dialogRef: MatDialogRef<EditReponseComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { descriptionReponse: string, questionId: number }
  ) {
    // Initialisez le champ avec la valeur existante
    this.editedDescription = data.descriptionReponse;
  }

  saveChanges() {
    if (!this.editedDescription) {
      this.errorMessage = 'La description ne peut pas être vide.';
    }
    else
    {
      this.dialogRef.close(this.editedDescription);
    }
  }

  cancel() {
    this.dialogRef.close();  // Cette ligne ferme le modal sans passer de données
  }

}
