import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {
  addEtudiantForm !: FormGroup;
  etudiants !:any[];
  constructor(private etudiantService: EtudiantService, private formBuilder:FormBuilder,private router:Router){
    this.addEtudiantForm = this.formBuilder.group(
      {
        nomEt:['',Validators.required],
        prenomEt :['', Validators.required],
        cin :['', Validators.required],
        ecole :['', Validators.required],
        dateNaissance :['', Validators.required]
      }
    );
  }
  onSubmit(){
    if (this.addEtudiantForm.valid){
      const etudiant = this.addEtudiantForm.value;
      this.etudiantService.addEtudiant(etudiant).subscribe(()=>
        { console.log("ajout")
          window.location.reload();}
      )
      this.router.navigate(['dashboard/lazy/etudiant']);
    }
  }


}
