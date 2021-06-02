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

  @Input() medecinNom: string;
  @Input() medecinprenom: string;
  @Input() medecinTel: string;
  
  test: boolean = false;

  constructor(private medecinService: MedecinService, private router : Router) { }
  
  ngOnInit(): void {
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe((medecins: any[]) => {
      this.medecins = medecins;
    });
    this.medecinService.emitMedecinSubject();

    // Appel pour récupérer les médecins sinon sa n'affiche rien
    this.medecinService.getMedecinsFromServer();
  }

  onChange(value){
    this.medecinService.getMedecinFromServerByDepartement(value);
  }

  onRecherche(){
    var nom = ((document.getElementById('rechercheMedecin') as HTMLInputElement).value);
    this.medecinService.getMedecinFromServerByNom(nom);
  }

}
