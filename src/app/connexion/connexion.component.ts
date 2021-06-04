import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
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
    this.visiteurService.getConnexion('dandre','oppg5');
  }

  onSignIn() {
    this.visiteurSubscription = this.visiteurService.visiteurSubject.subscribe((visiteurs: any[]) => {
      this.visiteurs = visiteurs;
    });
    this.visiteurService.emitVisiteurSubject();

    this.visiteurService.getConnexion(this.username, this.pwd);
    
    if (this.visiteurService['visiteurs'] != null) {

      this.visiteurService['visiteurs'].forEach(element => {
        sessionStorage.setItem('id', element['id']);
        sessionStorage.setItem('nom', element['nom']);
        sessionStorage.setItem('prenom', element['prenom']);
        sessionStorage.setItem('adresse', element['adresse']);
        sessionStorage.setItem('cp', element['cp']);
        sessionStorage.setItem('ville', element['ville']);
      });

      console.log(this.visiteurService);
      console.log(this.visiteurService['visiteurs'].length);

      this.authService.isAuth = true;

      this.router.navigateByUrl("/accueil");
    }
  }

  getUsername(event: any) {
    this.username = event.target.value;
  }

  getPwd(event: any) {
    this.pwd = event.target.value;
  }
}
