import { Component, Input, OnInit, OnDestroy } from '@angular/core';
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
  
  constructor(private medecinService: MedecinService) { }
  
  ngOnInit(): void {
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe((medecins: any[]) => {
      this.medecins = medecins;
    });
    this.medecinService.emitMedecinSubject();

    // Appel pour récupérer les médecins sinon sa n'affiche rien
    this.medecinService.getMedecinsFromServer();
  }

  
  ngOnDestroy(){
    this.medecinSubscription.unsubscribe();
  }

  onFetch(){
    this.medecinService.getMedecinsFromServer();
  }
}
