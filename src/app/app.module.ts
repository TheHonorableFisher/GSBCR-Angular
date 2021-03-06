import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HttpClientModule } from '@angular/common/http';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicamentComponent } from './medicament/medicament.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { RapportsComponent } from './rapports/rapports.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MedecinService } from './services/medecin.service';
import { MedicamentService } from './services/medicament.service';
import { RapportService } from './services/rapport.service';
import { MedecinsViewComponent } from './medecins-view/medecins-view.component';
import { RapportsViewComponent } from './rapports-view/rapports-view.component';
import { AuthGuard } from './services/AuthGuards.service';
import { AuthService } from './services/auth.service';
import { VisiteurService } from './services/visiteur.service';
import { ConnexionViewComponent } from './connexion-view/connexion-view.component';
import { AccueilViewComponent } from './accueil-view/accueil-view.component';
import { MedicamentViewComponent } from './medicament-view/medicament-view.component';
import { UnMedecinComponent } from './un-medecin/un-medecin.component';
import { UnMedecinViewComponent } from './un-medecin-view/un-medecin-view.component';
import { RapportsFormComponent } from './rapports-form/rapports-form.component';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  {path: 'accueil',canActivate: [AuthGuard] ,component: AccueilViewComponent},
  {path: 'medicaments',canActivate: [AuthGuard], component: MedicamentViewComponent},
  {path: 'medecins',canActivate: [AuthGuard], component: MedecinsViewComponent},
  {path: 'medecins/:id',canActivate: [AuthGuard],component: UnMedecinViewComponent},
  {path: 'rapports',canActivate: [AuthGuard], component: RapportsViewComponent},
  {path : 'connection',component: ConnexionViewComponent},
  {path : 'rapports/add',canActivate: [AuthGuard],component:RapportsFormComponent},
  {path: '', component:ConnexionComponent},
  {path : 'not-found',component:FourOhFourComponent},
  {path : '**', redirectTo : '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FourOhFourComponent,
    MedicamentComponent,
    MedecinsComponent,
    RapportsComponent,
    AccueilComponent,
    MedecinsViewComponent,
    RapportsViewComponent,
    ConnexionViewComponent,
    AccueilViewComponent,
    MedicamentViewComponent,
    UnMedecinComponent,
    UnMedecinViewComponent,
    RapportsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MedecinService,
    MedicamentService,
    RapportService,
    AuthService,
    VisiteurService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }