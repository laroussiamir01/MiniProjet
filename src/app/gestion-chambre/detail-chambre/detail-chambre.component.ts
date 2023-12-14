import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../model/Chambre';
import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';
import { Bloc } from 'src/app/model/bloc';

@Component({
  selector: 'app-detail-chambre',
  templateUrl: './detail-chambre.component.html',
  styleUrls: ['./detail-chambre.component.scss'],
})
export class DetailChambreComponent implements OnInit {
  chambre: any;
  idChambre:any;
  blocs: Bloc[] = [];
  selectedblocs!: number;
    constructor(
    private route: ActivatedRoute,
    private sChambre: ChambreService, private router:Router
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idChambre');
      if (idParam !== null) {
        const chambreId = +idParam;
        this.sChambre.getChambreById(chambreId).subscribe(chambre => {
          this.chambre = chambre;
        });
      } else {

      }
    });
  }
  editCh(idChambre: any) {
    this.router.navigate(['/dashboard/gestion-chambre/updateCh', idChambre]);
  }

}
