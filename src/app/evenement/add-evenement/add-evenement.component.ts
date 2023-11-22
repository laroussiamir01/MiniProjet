import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FoyerService} from "../../services/foyer.service";
import {EvenementService} from "../../services/serviceEvenement/evenement.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.scss']
})
export class AddEvenementComponent {

  addEvenementForm !: FormGroup;
  evenements!:any
  constructor(private evenementService: EvenementService, private formBuilder:FormBuilder,private router:Router){
    this.addEvenementForm = this.formBuilder.group(
      {
        titre:['',Validators.required],
        description :['', Validators.required],
        dateDebut :['', Validators.required],
        dateFin :['', Validators.required],
        placeDisponible:['', Validators.required]
      }
    );
  }
  onSubmit(){
    if (this.addEvenementForm.valid){
      const evenement = this.addEvenementForm.value;
      this.evenementService.addEvenement(evenement).subscribe(()=>
        { console.log("ajout");
         this.getAll();
          }
      )
    }
    this.router.navigate(['dashboard/lazy/evenement']);
  }
  getAll(){
    this.evenementService.getAllEvenements().subscribe((data)=>{
      this.evenements=data;
      console.log(data);

    })
  }

}
