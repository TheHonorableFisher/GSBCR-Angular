import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedecinService } from '../services/medecin.service';
import { RapportService } from '../services/rapport.service';

@Component({
  selector: 'app-rapports-form',
  templateUrl: './rapports-form.component.html',
  styleUrls: ['./rapports-form.component.css']
})
export class RapportsFormComponent implements OnInit {

  public motif: string;
  public bilan: string;
  public idVisiteur = sessionStorage.getItem('id');
  public idMedecin: string;

  medecins: any[];
  medecinSubscription: Subscription;

  constructor(private medecinService: MedecinService, private rapportService: RapportService, private route: Router) { }

  ngOnInit(): void {
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe((medecins: any[]) => {
      this.medecins = medecins;
    });
    this.medecinService.emitMedecinSubject();

    // Appel pour récupérer les médecins sinon sa n'affiche rien
    this.medecinService.getMedecinsFromServer();
  }

  onSubmit(form) {
    this.rapportService.sendRapportToServer(form.value);
    this.route.navigate(['/rapports']);
  }
  
}
