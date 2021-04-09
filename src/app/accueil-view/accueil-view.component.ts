import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-view',
  templateUrl: './accueil-view.component.html',
  styleUrls: ['./accueil-view.component.css']
})
export class AccueilViewComponent implements OnInit {

  nom: string;
  prenom: string;

  constructor() { }

  ngOnInit(): void {
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
  }

}
