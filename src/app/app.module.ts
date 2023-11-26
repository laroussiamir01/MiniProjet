import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {DashboardEtudiantComponent} from "./dashboard-etudiant/dashboard-etudiant.component";

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
    DashboardComponent,
    DashboardEtudiantComponent,






  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    BrowserModule,
    BrowserAnimationsModule,
      SharedModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
