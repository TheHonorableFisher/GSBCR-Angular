import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { VisiteurService } from '../services/visiteur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  visiteurs: any[];
  visiteurSubscription: Subscription;

  @Input() username: string;
  @Input() pwd: string;

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router, private visiteurService: VisiteurService) { }

  ngOnInit(): void {
  }

  onSignIn() {

    if (this.visiteurService.getConnexion(this.username,this.pwd)) {
      this.authService.isAuth = true;

      console.log(this.visiteurService);

      this.visiteurs = this.visiteurService.getVisiteur();

      sessionStorage.setItem('id', this.visiteurs['id']);
      sessionStorage.setItem('nom', this.visiteurs['nom']);
      sessionStorage.setItem('prenom', this.visiteurs['prenom']);
      sessionStorage.setItem('adresse', this.visiteurs['adresse']);
      sessionStorage.setItem('cp', this.visiteurs['cp']);
      sessionStorage.setItem('ville', this.visiteurs['ville']);

      //this.router.navigateByUrl("/accueil");

    } else {
      // TODO afficher message d'erreur
    }
  }

  getUsername(event: any) {
    this.username = event.target.value;
  }

  getPwd(event: any) {
    this.pwd = event.target.value;
  }
}
