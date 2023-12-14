import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-detail-foyer',
  templateUrl: './detail-foyer.component.html',
  styleUrls: ['./detail-foyer.component.scss']
})
export class DetailFoyerComponent implements OnInit{
  foyer!:any;
  constructor(private route: ActivatedRoute, private foyerService: FoyerService) {}
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idFoyer');
      if (idParam !== null) {
        const idFoyer = +idParam; 
        this.foyerService.getFoyerById(idFoyer).subscribe(foyer=> {
          this.foyer = foyer; 
        });
      } else {
       
      }
    });
  }
}
