import { Component, Input, OnInit } from '@angular/core';
import { MedecinService} from '../services/medecin.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {

  @Input() medecinNom: string;
  @Input() medecinprenom: string;
  @Input() medecinTel: string;

  constructor(private medecinService: MedecinService) { }

  ngOnInit(): void {
  }

}
