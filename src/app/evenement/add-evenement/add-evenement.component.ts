import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FoyerService} from "../../services/foyer.service";
import {EvenementService} from "../../services/serviceEvenement/evenement.service";
import {Router} from "@angular/router";
declare var createGoogleEvent: any;
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

      let appointmentTime = new Date(this.addEvenementForm.value.dateDebut);
      let appointmentEndTime = new Date(this.addEvenementForm.value.dateDebut);
      // Convert the date to the desired format with a custom offset (e.g., -07:00)
      const startTime = appointmentTime.toISOString().slice(0, 18) + '-07:00';
      const endTime = appointmentEndTime.toISOString().slice(0, 18) + '-07:00';
      const eventDetails = {
        email: "amirlaroussi99544029@gmail.com",
        startTime: startTime,
        endTime: endTime,
      };
      console.info(eventDetails);
      //this.generateICSFile()
      createGoogleEvent(eventDetails);

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
