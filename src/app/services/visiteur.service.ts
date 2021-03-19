import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VisiteurService {

    visiteurSubject = new Subject<any[]>();

    private visiteurs = [];

    constructor(private HttpClient: HttpClient) { }

    getConnexion($login,$mdp) {
        this.HttpClient.get<any[]>('http://172.29.1.31/Mael/GSBCR-Angular/server/?param=connexion&login='+$login+'&mdp='+$mdp).subscribe((responce) => {
            this.visiteurs = responce;
        })
    }

}