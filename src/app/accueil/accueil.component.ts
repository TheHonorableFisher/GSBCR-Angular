import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  nom: string;
  prenom: string;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.nom = sessionStorage.getItem('nom');
    this.prenom = sessionStorage.getItem('prenom');
  }

  goTo() {
    this.router.navigateByUrl('/medecins')
  }

}
