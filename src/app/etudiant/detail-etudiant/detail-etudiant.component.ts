import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FoyerService} from "../../services/foyer.service";
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";

@Component({
  selector: 'app-detail-etudiant',
  templateUrl: './detail-etudiant.component.html',
  styleUrls: ['./detail-etudiant.component.scss']
})
export class DetailEtudiantComponent implements OnInit{
  etudiant!:any;
  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) {}
  ngOnInit(){
    const idEtudiant= localStorage.getItem('id');


    // @ts-ignore
        this.etudiantService.getEtudiantById(localStorage.getItem('id')).subscribe(etudiant=> {
          this.etudiant = etudiant;
        });


  }
}
