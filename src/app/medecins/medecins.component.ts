import { Component, Input, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {

  @Input() medecinNom: string;
  @Input() medecinTel: string;
  @Input() medecinAdresse: string;
  @Input() medecinSpe: string;
  @Input() medecinDepartement: string;

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
  }

}
