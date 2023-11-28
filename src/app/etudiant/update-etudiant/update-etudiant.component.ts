import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoyerService} from "../../services/foyer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent implements OnInit{
  etudiant :any={};
  idEtudiant:any;
  etudiants:any;
  @Input()etu:any;
  @Output()sendmsg=new EventEmitter();
  constructor(private etudiantService: EtudiantService,  private ac:ActivatedRoute , private router:Router,private http: HttpClient){
   // this.idEtudiant=this.ac.snapshot.params['idEtudiant'];
  }

  ngOnInit (){
   this.etudiant.idEtudiant = this.ac.snapshot.params['idEtudiant'];
  this.etudiantService.getEtudiantById(this.etu.idEtudiant).subscribe(data=>{
  this.etudiant;})
   this.http.get<any>(`http://localhost:8082/api/v1/etu/etudiant/${this.etu.idEtudiant}`).subscribe(response => {
     this.etudiant = response;
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
    this.etudiantService.updateEtudiant(this.idEtudiant,this.etudiant).subscribe((data)=>{
    this.getAll();
    });
    console.log(this.etudiant);
    this.router.navigate(['dashboard/lazy/etudiant']);


  }

  sendDataToParent(){
    this.sendmsg.emit('bonjour');
    // this.etudiantService.updateEtudiant(this.etu.idEtudiant,this.etu).subscribe((data)=>{
    //   this.getAll();
    // });
    this.etudiantService.updateEtudiant(this.etu.idEtudiant,this.etu).subscribe((data)=>{
    });
    console.log(this.etu);
  }

  getAll(){
    this.etudiantService.getAllEtudiants().subscribe((data)=>{
      this.etudiants=data;
      console.log(data);

    })
  }

}
