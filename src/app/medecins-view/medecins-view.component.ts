import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-medecins-view',
  templateUrl: './medecins-view.component.html',
  styleUrls: ['./medecins-view.component.css']
})
export class MedecinsViewComponent implements OnInit {

  
  medecins: any[];
  medecinSubscription: Subscription;

  Spe: any[];
  SpeSubscription : Subscription;

  @Input() medecinNom: string;
  @Input() medecinprenom: string;
  @Input() medecinTel: string;
  
  test: boolean = false;

  constructor(private medecinService: MedecinService, private router : Router) { }
  
  ngOnInit(): void {
    // Récupération des médecins
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe((medecins: any[]) => {
      this.medecins = medecins;
    });
    this.medecinService.emitMedecinSubject();

    // Appel pour récupérer les médecins sinon sa n'affiche rien
    this.medecinService.getMedecinsFromServer();

    // Récupération de la spécialité des médecins
    this.SpeSubscription = this.medecinService.speSubject.subscribe((specialites: any[]) =>{
      this.Spe = specialites;
    })
    this.medecinService.emitSpeSubject();

    // Appel pour récupérer les specialités sinon ça ne marche pas
    this.medecinService.getMedecinSpecialiteFromServer();
  }

  onChange(value){
    this.medecinService.getMedecinFromServerByDepartement(value);
  }

  onSpe(value){
    this.medecinService.getMedecinFromServerBySpe(value);
  }

  onRecherche(){
    var nom = ((document.getElementById('rechercheMedecin') as HTMLInputElement).value);
    this.medecinService.getMedecinFromServerByNom(nom);
  }

}
