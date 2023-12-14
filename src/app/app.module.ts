import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantService } from './services/serviceEtudiant/etudiant.service';
import { AddFoyerComponent } from './foyer/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from './foyer/update-foyer/update-foyer.component';
import { DeleteFoyerComponent } from './foyer/delete-foyer/delete-foyer.component';
import { ListeFoyerComponent } from './foyer/liste-foyer/liste-foyer.component';
import { DetailFoyerComponent } from './foyer/detail-foyer/detail-foyer.component';
import { AddUniversiteComponent } from './universite/add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './universite/update-universite/update-universite.component';
import { ListeUniversiteComponent } from './universite/liste-universite/liste-universite.component';
import { DeleteUniversiteComponent } from './universite/delete-universite/delete-universite.component';
import { DetailUniversiteComponent } from './universite/detail-universite/detail-universite.component';
import {EvenementService} from "./services/serviceEvenement/evenement.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEtudiantComponent } from './dashboard-etudiant/dashboard-etudiant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {AuthInterceptor} from "./services/auth/auth.interceptor";
import {AuthenticationService} from "./services/login/authentication.service";
import {AuthGuard} from "./services/auth/auth.guard";

import {AddPlatComponent} from "./plat/add-plat/add-plat.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {UpdateMenuComponent} from "./menu/update-menu/update-menu.component";
import {ListeMenuComponent} from "./menu/liste-menu/liste-menu.component";
import {UpdatePlatComponent} from "./plat/update-plat/update-plat.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {MenuService} from "./services/menu.service";
import {PlatService} from "./services/plat.service";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeBlocComponent } from './bloc/home-bloc/home-bloc.component';
import { AddBlocComponent } from './bloc/add-bloc/add-bloc.component';
import { DetailBlocComponent } from './bloc/detail-bloc/detail-bloc.component';
import { DetailBlocEtudiantComponent } from './bloc/detail-bloc-etudiant/detail-bloc-etudiant.component';
import { ListeBlocComponent } from './bloc/liste-bloc/liste-bloc.component';
import { ListeBlocEtudiantComponent } from './bloc/liste-bloc-etudiant/liste-bloc-etudiant.component';
import { UpdateBlocComponent } from './bloc/update-bloc/update-bloc.component';
import { Foyer3dComponent } from './foyer/foyer3d/foyer3d.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { AddReservationComponent } from './gestion-reservation/add-reservation/add-reservation.component';
import { ShowReservationComponent } from './gestion-reservation/show-reservation/show-reservation.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { UpdateReservationComponent } from './gestion-reservation/update-reservation/update-reservation.component';
import { DeleteReservationComponent } from './gestion-reservation/delete-reservation/delete-reservation.component';
import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { DeleteChambreComponent } from './gestion-chambre/delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ListnonvalideComponent } from './gestion-reservation/listnonvalide/listnonvalide.component';
import { DashreservationComponent } from './gestion-reservation/dashreservation/dashreservation.component';
import { ListvalideComponent } from './gestion-reservation/listvalide/listvalide.component';
import { PlanningMatUIComponent } from './gestion-reservation/planning-mat-ui/planning-mat-ui.component';
import { DashchambreComponent } from './gestion-chambre/dashchambre/dashchambre.component';
import { ChambreClientComponent } from './gestion-chambre/chambre-client/chambre-client.component';
import { AddQuestionComponent } from './question/add-question/add-question.component';
import { DetailQuestionComponent } from './question/detail-question/detail-question.component';
import { ListeQuestionComponent } from './question/liste-question/liste-question.component';
import { ShowQuestionComponent } from './question/show-question/show-question.component';
import { UpdateQuestionComponent } from './question/update-question/update-question.component';
import { DeleteQuestionComponent } from './question/delete-question/delete-question.component';
import { EditReponseComponent } from './Reponse/edit-reponse/edit-reponse.component';
import {QuestionService} from "./services/question.service";
import {ReponseService} from "./services/reponse.service";
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AddCommandeComponent} from "./commande-f/add-commande/add-commande.component";
import {ListeCommandeComponent} from "./commande-f/liste-commande/liste-commande.component";
import {UpdateCommandeComponent} from "./commande-f/update-commande/update-commande.component";
import { MotdePasseComponent } from './motde-passe/motde-passe.component';
import {DetailEtudiantComponent} from "./etudiant/detail-etudiant/detail-etudiant.component";
import {ListePlatComponent} from "./plat/liste-plat/liste-plat.component";
import {ListeMenuEtudiantComponent} from "./menu/liste-menu-etudiant/liste-menu-etudiant.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    HomeComponent,
    AddFoyerComponent,
    UpdateFoyerComponent,
    DeleteFoyerComponent,
    ListeFoyerComponent,
    DetailFoyerComponent,
    AddUniversiteComponent,
    UpdateUniversiteComponent,
    ListeUniversiteComponent,
    DeleteUniversiteComponent,
    DetailUniversiteComponent,
    DashboardEtudiantComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    ListeMenuComponent,
    AddPlatComponent,
    UpdatePlatComponent,
    ListePlatComponent,
    HomeBlocComponent,
    AddBlocComponent,
    DetailBlocComponent,
    DetailBlocEtudiantComponent,
    ListeBlocComponent,
    ListeBlocEtudiantComponent,
    UpdateBlocComponent,
    Foyer3dComponent,AddReservationComponent,
    ShowReservationComponent,
    DetailReservationComponent,
    UpdateReservationComponent,
    AddChambreComponent,
    ShowChambreComponent,
    UpdateChambreComponent,
    DetailChambreComponent,
    DashboardComponent,
    DashreservationComponent,
    ListvalideComponent,
    ListnonvalideComponent,
    PlanningMatUIComponent,
    DeleteReservationComponent,
    DeleteChambreComponent,
    UpdateChambreComponent,
    ShowChambreComponent,
    DetailChambreComponent,
    DeleteChambreComponent,
    DashchambreComponent,
    AddChambreComponent,
    ChambreClientComponent,
    AddQuestionComponent,
    DetailQuestionComponent,
    ListeQuestionComponent,
    ShowQuestionComponent,
    UpdateQuestionComponent,
    DeleteQuestionComponent,
    EditReponseComponent,AddCommandeComponent,
    ListeCommandeComponent,
    UpdateCommandeComponent,
    MotdePasseComponent,
    DetailEtudiantComponent,
    ListeMenuEtudiantComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    //NgChartsModule,
    RouterModule,
    FullCalendarModule,
    MatDialogModule,
    MatTableModule,
    MatDatepickerModule





  ],
  providers: [EtudiantService,
    EvenementService,
    HttpClient,
    MenuService,
    PlatService,
    QuestionService,
    ReponseService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
