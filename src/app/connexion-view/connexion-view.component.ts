import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { VisiteurService } from '../services/visiteur.service';

@Component({
  selector: 'app-connexion-view',
  templateUrl: './connexion-view.component.html',
  styleUrls: ['./connexion-view.component.css']
})
export class ConnexionViewComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private visiteurService: VisiteurService) { }

  ngOnInit(): void {
    
  }

  
}
