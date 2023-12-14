import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from 'src/app/services/foyer.service';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-liste-foyer',
  templateUrl: './liste-foyer.component.html',
  styleUrls: ['./liste-foyer.component.scss']
})
export class ListeFoyerComponent implements OnInit {
  @Input()searchTerm: string = '';
  foyers!: any;
  moyenneCapacite!: number;
  chart: any;
  capaciteDisponible !: number;
  @ViewChild('myChart') myChart!: ElementRef;

  constructor(
    private foyerService: FoyerService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    
    this.foyerService.getAllFoyers().subscribe((data) => {
      this.foyers = data;
      console.log(data);
     
    });
   
    //moyenne
    this.foyerService.getMoyenneCapaciteFoyers().subscribe(
      (moyenne) => {
        this.moyenneCapacite = moyenne;
      },
      (error) => {
        console.error('Erreur lors de la récupération de la statistique : ', error);
      }
    );
  //chart
    this.foyerService.getAllFoyers().subscribe((data) => {
      this.foyers = data;
      
      // Extraire les noms des foyers
      const labels = this.foyers.map((foyer: Foyer) => foyer.nomFoyer);

      // Extraire les capacités des foyers
      const capacities = this.foyers.map((foyer: Foyer) => foyer.capaciteFoyer);

      // Créer le graphique avec les données actualisées
      this.createChart(labels, capacities);
      // Capacité disponible
    this.nbCapaciteDispo();
    });
    
    

  }
  createChart(labels: string[], data: number[]) {
    const ctx = this.myChart.nativeElement.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels, 
        datasets: [{
          label: 'Capacité des Foyers',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
          },
        },
      },
    });
  }
  
    nbCapaciteDispo() {
      console.log('Inside nbCapaciteDispo');
      this.foyers.forEach((foyer: any) => {
        console.log('Inside forEach loop');
        console.log('Foyer Model:', foyer);
        const detailsFoyer = {
          idFoyer: foyer.idFoyer,
          nomFoyer: foyer.nomFoyer,
          capaciteFoyer: foyer.capaciteFoyer,
          capaciteFoyerBloc: foyer.capaciteFoyerBloc
        };
        console.log('Details Foyer:', detailsFoyer);
    
        if (typeof detailsFoyer.capaciteFoyer === 'number' && typeof detailsFoyer.capaciteFoyerBloc === 'number') {
          foyer.capaciteDisponible = detailsFoyer.capaciteFoyer - detailsFoyer.capaciteFoyerBloc;
        } else {
          foyer.capaciteDisponible = 0;
        }
    
        console.log('Capacite Disponible:', foyer.capaciteDisponible);
      });
    }
    
  
  
  get filteFoyers() {
    return this.foyers.filter(
      (foyer: Foyer) =>
        foyer.idFoyer.toString().includes(this.searchTerm) ||
        foyer.capaciteFoyer.toString().includes(this.searchTerm) ||
        foyer.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteFoyer(foyer: Foyer) {
    this.foyerService.deleteFoyer(foyer).subscribe(() => {
      this.foyers = this.foyers.filter((f: Foyer) => f.idFoyer !== foyer.idFoyer);
      this.openSnackBar('Foyer supprimé avec succès', 'Fermer');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  updateFoyer(id: any) {
    this.router.navigate(['/dashboard/foyer/updateFoyer', id]);
  }

  details(id: any) {
    this.router.navigate(['/dashboard/foyer/detailFoyer', id]);
  }
}
