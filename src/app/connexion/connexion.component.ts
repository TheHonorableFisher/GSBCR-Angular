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

  authStatus: boolean;

  @Input() username: string;
  @Input() pwd: string;

  visiteurs : any[];
  visiteurSubscription : Subscription;

  constructor(private authService: AuthService, private router: Router, private visiteurService: VisiteurService) { }

  ngOnInit(): void {
    this.visiteurService.getConnexion('dandre','oppg5');
    console.log(this.visiteurService);
  }

  onSignIn() {
    
    if(this.visiteurService.getVisiteur()){
      this.authService.isAuth = true;

      this.visiteurs = this.visiteurService.getVisiteur();

      sessionStorage.setItem('id',this.visiteurs['id']);
      sessionStorage.setItem('nom',this.visiteurs['nom']);
      sessionStorage.setItem('prenom',this.visiteurs['prenom']);
      sessionStorage.setItem('adresse',this.visiteurs['adresse']);
      sessionStorage.setItem('cp',this.visiteurs['cp']);
      sessionStorage.setItem('ville',this.visiteurs['ville']);
      
      this.router.navigateByUrl("/accueil");

    }else{
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
