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
    this.authStatus = this.authService.isAuth;

    this.visiteurSubscription = this.visiteurService.visiteurSubject.subscribe((visiteurs: any[]) =>{
      this.visiteurs = visiteurs;
    })
  }

  onSignIn(event: any) {

    this.visiteurService.getConnexion(this.username,this.pwd);

    console.log(this.visiteurs);

    /*
    if (this.donnee.length != 0) {
      
      sessionStorage.setItem('id',this.donnee['id']);
      sessionStorage.setItem('nom',this.donnee['nom']);
      sessionStorage.setItem('prenom',this.donnee['prenom']);
      
      this.authService.signIn().then(
        () => {
          console.log(sessionStorage.getItem('id') + " " + sessionStorage.getItem('nom') + " " + sessionStorage.getItem('prenom') )
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['accueil']);
        }
      )
    }*/

  }

  getUsername(event: any) {
    this.username = event.target.value;
  }

  getPwd(event: any) {
    this.pwd = event.target.value;
  }

}
