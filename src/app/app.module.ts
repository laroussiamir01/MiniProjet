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
import {DetailPlatComponent} from "./plat/detail-plat/detail-plat.component";
import {AddPlatComponent} from "./plat/add-plat/add-plat.component";
import {AddMenuComponent} from "./menu/add-menu/add-menu.component";
import {UpdateMenuComponent} from "./menu/update-menu/update-menu.component";
import {ListeMenuComponent} from "./menu/liste-menu/liste-menu.component";
import {UpdatePlatComponent} from "./plat/update-plat/update-plat.component";
import {ListePlatComponent} from "./plat/liste-plat/liste-plat.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {MenuService} from "./services/menu.service";
import {PlatService} from "./services/plat.service";
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    ListeMenuComponent,
    AddPlatComponent,
    UpdatePlatComponent,
    ListePlatComponent,
    DetailPlatComponent
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
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [EtudiantService,EvenementService,HttpClient, MenuService, PlatService,
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
