import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {EvenementService} from "../../services/serviceEvenement/evenement.service";

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.scss']
})
export class UpdateEvenementComponent implements OnInit {
  evenement :any={};
  idEvenement:any;
  evenements !:any[];
  @Input()eve:any;
  @Output()sendmsg=new EventEmitter();

  constructor(private evenementService: EvenementService,  private ac:ActivatedRoute , private router:Router,private http: HttpClient){
   // this.idEvenement=this.ac.snapshot.params['idEvenement'];
  }

  ngOnInit (){
    this.evenement.idEvenement = this.ac.snapshot.params['idEvenement'];
    this.evenementService.getEvenementById(this.eve.idEvenement).subscribe(data=>{
      this.evenement;})
    this.http.get<any>(`http://localhost:8082/api/v1/eve/evenement/${this.eve.idEvenement}`).subscribe(response => {
      this.evenement = response;
    });
  }

  update(){
    // const idEtudiant = this.ac.snapshot.params['idEtudiant'];
    // this.etudiantService.updateEtudiant(idEtudiant,this.etudiant).subscribe(()=>{
    //   console.log("Etudiant mis à jour avec succès");
    //   this.router.navigate(['listEtudiant']);
    //
    // },(error)=>{
    //   console.error('Erreur lors de la mise à jour de l\'étudiant :', error);
    // });
    // console.log(idEtudiant);
    this.evenementService.updateEvenement(this.idEvenement,this.evenement).subscribe((data)=>{
      console.log(data);
     this.getAll();
    });
    console.log(this.evenement);
    this.router.navigate(['dashboard/lazy/evenement']);


  }
  sendDataToParent(){
    this.sendmsg.emit('bonjour');
    this.evenementService.updateEvenement(this.eve.idEvenement,this.eve).subscribe((data)=>{
      //  this.getAll();
    });
    console.log(this.eve);
  }
  getAll(){
    this.evenementService.getAllEvenements().subscribe((data)=>{
      this.evenements=data;
      console.log(data);

    })
  }


}
