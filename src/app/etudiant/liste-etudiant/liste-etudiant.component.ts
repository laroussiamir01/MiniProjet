import {Component, OnInit} from '@angular/core';
import {FoyerService} from "../../services/foyer.service";
import {Router} from "@angular/router";
import {Foyer} from "../../model/foyer";
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";
import {Etudiant} from "../../model/etudiant";
import {EvenementService} from "../../services/serviceEvenement/evenement.service";

@Component({
  selector: 'app-liste-etudiant',
  templateUrl: './liste-etudiant.component.html',
  styleUrls: ['./liste-etudiant.component.scss']
})
export class ListeEtudiantComponent implements OnInit{
  Showupdate=false;
  etudianttoupdate:any;
  constructor(private etudiantService:EtudiantService,private evenmentService:EvenementService ,private router:Router){}
  etudiants !:any[];
  evenements!:any[];
  ngOnInit() {

    this.etudiantService.getAllEtudiants().subscribe((data)=>{
      this.etudiants=data;
      console.log(data);
    })
    this.evenmentService.getAllEvenements().subscribe((data)=>{
      this.evenements=data;
      console.log(data);
    })
  }
  deleteEtudiant(etudiant:Etudiant){
    this.etudiantService.deleteEtudiant(etudiant).subscribe((data)=>{
      console.log(data);
      this.getAll();
    });

  }
  updateEtudiant(id:any){
    this.router.navigate(['dashboard/lazy/etudiant/updateEtudiant', id]);
  }
  affecterEvenementToEtudiant(idEtudiant:any,idEvenement:any){
    this.etudiantService.affecterEvenementToEtudiant(idEtudiant,idEvenement).subscribe((data)=>{
      console.log(data);
     this.getAll();
    })
  }
  showForm(etudiant:any){
    this.etudianttoupdate=etudiant;
    this.Showupdate=true;
  }
  afterrecieveData(e:any){
    this.Showupdate=false;
  }
  getAll(){
    this.etudiantService.getAllEtudiants().subscribe((data)=>{
      this.etudiants=data;
      console.log(data);

    })
  }


}
