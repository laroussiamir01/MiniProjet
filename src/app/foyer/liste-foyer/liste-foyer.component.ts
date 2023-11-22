import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.scss']
})
export class ListeFoyerComponent implements OnInit{
  constructor(private foyerService:FoyerService, private router:Router){}
  foyers !:any[];
  ngOnInit() {
  this.foyerService.getAllFoyers().subscribe((data)=>{
    this.foyers=data;
    console.log(data);
  })  
  }
  deleteFoyer(foyer:Foyer){
    this.foyerService.deleteFoyer(foyer).subscribe(); 
  }
  updateFoyer(id:any){
    this.router.navigate(['updateFoyer', id]);
}
}
