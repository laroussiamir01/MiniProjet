import {Component, OnInit} from '@angular/core';
import {EvenementService} from "../../services/serviceEvenement/evenement.service";
import {Router} from "@angular/router";
import {Evenement} from "../../model/evenement";
import {EtudiantService} from "../../services/serviceEtudiant/etudiant.service";
import {map, Observable,async} from "rxjs";
import {Etudiant} from "../../model/etudiant";
import {UserAuthService} from "../../services/user-auth/user-auth.service";

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.scss']
})
export class ListEvenementComponent implements OnInit {
  etudiant =new Etudiant;
  evenement= new Evenement;
  etudiantById!:any;
  constructor(private userAuthService: UserAuthService,private evenementService:EvenementService,private etudiantService:EtudiantService ,private router:Router){}
  evenements !:any[];
  participeDeja=true;
  idEvenement!:any;
  idEtudiant=8;
  // isAffectationEnCours!:boolean;
  today: Date = new Date();
  Showupdate=false;
  evenementtoupdate:any;
condition=false;
dateFinFormated!:Date;
  existedeja!:any;


  ngOnInit() {
    // this.etudiantService.etudiantParticipeDeja(8,11).subscribe(
    //   (d)=>{
    //     console.log(d)
    //     this.participeDeja=d;
    //   }
    // )
    this.evenementService.getAllEvenements().subscribe((data)=>{
      this.evenements=data;
      console.log(data);
      //  console.log(this.today.getDate());

    },
      (error)=>{
        console.log('test',error.status)
switch (error.status){
  case 500:alert('500');
    console.log('helloooooooooo');
  break;
  case 0:alert('0');break;
  case 401:alert('401');break;
  default:alert('Une erreur s\'est produite.');
}
      }
      );
    this.etudiantService.getEtudiantById(Number(localStorage.getItem('id'))).subscribe(
      (data)=>{
        this.etudiantById=data;
        console.log(data);
      }
    )
  }
  deleteEvenemnt(evenement:Evenement){
    this.evenementService.deleteEvenement(evenement).subscribe((data)=>{
      console.log(data);
     this.getAll();
    });

  }
  updateEvenement(id:any){
    this.router.navigate(['dashboard/lazy/evenement/updateEvenement', id]);
  }
  affecterEvenementToEtudiant(idEtudiant:any,idEvenement:any){

    this.etudiantService.affecterEvenementToEtudiant(idEtudiant,idEvenement).subscribe((data)=>{
      console.log(data);
        this.getAll();
    },(error)=>{
      console.log('test',error.status)
      switch (error.status){
        case 500:alert('Aucune place disponible pour l\'événement ou l\'étudiant est déjà affecté à cet événement');
        //  console.log(this.today);
          break;
        case 0:alert('0');break;
        case 401:alert('401');break;
        default:alert('Une erreur s\'est produite.');
      }
    }
    );
  }

  desaffecterEtudiant(idEtudiant:any,idEvenement:any){

    this.etudiantService.desaffecterEtudiant(idEtudiant,idEvenement).subscribe((data)=>{
        console.log(data);
        this.getAll();
      },(error)=>{
        console.log('test',error.status);
        switch (error.status){
          case 500:alert('Aucune place disponible pour l\'événement ou l\'étudiant est déjà affecté à cet événement');
          //  console.log(this.today);
            break;
          case 0:alert('0');break;
          case 401:alert('401');break;
          case 404:alert('Evenement deja non affecter an l\'etudiant');break;
          default:alert('desaffectation reussi.');
            this.getAll();
          //  console.log(this.today);

        }

      }
    );
  }

    // etudiantDejaParticipe(): void {
    //    this.etudiantService.etudiantParticipeDeja(this.etudiant.idEtudiant,this.evenement.idEvenement).subscribe(
    //     (d)=>{
    //       console.log(d)
    //       this.participeDeja=d;
    //     }
    //   )
    // }

    // participer(a:number){
    //
    // }
  //  return  this.etudiantService.etudiantParticipeDeja(etudiantId,evenementId).subscribe((data)=>{
  //    const etudiantParticipe=data;
  //   console.log('etudiant participe:',etudiantParticipe);
  //  })
  // //   const etudiantParticipe = this.etudiantService.etudiantParticipeDeja(etudiantId, evenementId);
  //   console.log('Etudiant participe :', etudiantParticipe);
  //  return etudiantParticipe;
  // // }


  isDateFinDepassee(dateFin: Date): boolean {
    const today = new Date();
    return dateFin < today;
  }
  showForm(etudiant:any){
    this.evenementtoupdate=etudiant;
    this.Showupdate=true;
  }
  afterrecieveData(e:any){
    this.Showupdate=false;
  }
  // etudiantDejaParticipe1(etudiantId: number, evenementId: number): Observable<boolean> {
  //   return this.etudiantService.etudiantParticipeDeja(etudiantId, evenementId).pipe(
  //     map((d) => {
  //       console.log(d);
  //       this.participeDeja = d;
  //       return !!d; // Convertit la valeur en un booléen
  //     })
  //   );
  // }

  // verifierParticipation(idEtudiant: number, idEvenement: number) {
  //   this.etudiantService.etudiantParticipeDeja(idEtudiant,idEvenement).subscribe(result => {
  //     if (result) {
  //       console.log("L'étudiant participe déjà à l'événement.");
  //     } else {
  //       console.log("L'étudiant ne participe pas encore à l'événement.");
  //     }
  //   });
  // }
getAll(){
  this.evenementService.getAllEvenements().subscribe((data)=>{
    this.evenements=data;
    console.log(data);

  })
}

  public roleMatch(allowedRoles:any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {

      if (userRoles == allowedRoles) {
        isMatch = true;
        return isMatch;
      } else {
        return isMatch;
      }
    }
    return isMatch;
  }

  // public existeDeja(idEtudiant: any, idEvenement: any): boolean {
  //   let existe = false;
  //   this.etudiantService.etudiantParticipeDeja(idEtudiant, idEvenement).subscribe(
  //     (result: boolean) => {
  //       existe = result;
  //     },
  //     (error: any) => {
  //       // Handle the error if needed
  //     }
  //   );
  //   return existe;
  // }

  // isEventExpired(eventDate: Date): boolean {
  //   const today = new Date();
  //   return eventDate.toJSON() > today.toJSON();
  // }


  protected readonly localStorage = localStorage;
}
