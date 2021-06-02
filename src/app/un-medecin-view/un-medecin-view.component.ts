import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-un-medecin-view',
  templateUrl: './un-medecin-view.component.html',
  styleUrls: ['./un-medecin-view.component.css']
})
export class UnMedecinViewComponent implements OnInit {

  medecins: any[];
  MedecinSubsciption: Subscription;

  private id: string;

  constructor(private medecinService: MedecinService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.MedecinSubsciption = this.medecinService.medecinSubject.subscribe((medecins: any[]) => {
      this.medecins = medecins;
    });
    this.medecinService.emitMedecinSubject();

    this.medecinService.getMedecinFromServerById(this.id);
  }

}
