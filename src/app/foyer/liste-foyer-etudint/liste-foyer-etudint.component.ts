
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from 'src/app/services/foyer.service';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-liste-foyer-etudint',
  templateUrl: './liste-foyer-etudint.component.html',
  styleUrls: ['./liste-foyer-etudint.component.scss']
})
export class ListeFoyerEtudintComponent {
  searchTerm: string = '';
  foyers!: any;
  moyenneCapacite!: number;
  chart: any;
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
  
  get filteFoyers() {
    return this.foyers.filter(
      (foyer: Foyer) =>
        foyer.idFoyer.toString().includes(this.searchTerm) ||
        foyer.capaciteFoyer.toString().includes(this.searchTerm) ||
        foyer.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  details(id: any) {
    this.router.navigate(['/dashboardEtudiant/foyer/detailFoyer', id]);
  }
}