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
import { MedicamentListeComponent } from './medicament-liste/medicament-liste.component';

const appRoutes: Routes = [
  // TODO ajouter une guard mais pour ça d'abord créer le système d'authentification
  {path: 'accueil', component: AccueilComponent},
  {path: 'medicaments', component: MedicamentComponent},
  {path: 'medecins', component: MedecinsComponent},
  {path: 'rapports', component: RapportsComponent},
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
    MedicamentListeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }