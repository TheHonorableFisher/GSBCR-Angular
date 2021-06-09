import { Component, Input, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-un-medecin',
  templateUrl: './un-medecin.component.html',
  styleUrls: ['./un-medecin.component.css']
})
export class UnMedecinComponent implements OnInit {

  @Input() medecinNom: String;
  @Input() medecinPrenom: String;
  @Input() medecinAdresse: String;
  @Input() medecinTel: String;
  @Input() medecinSpe: String;
  @Input() medecinDep: String;
  @Input() medecinLieu: String;
  @Input() medecinLibelle: string;

  constructor(private medecinService : MedecinService) { }

  ngOnInit(): void {
    if (this.medecinSpe == null) {
      this.medecinSpe = "Aucune";
    }
  }
  

}
