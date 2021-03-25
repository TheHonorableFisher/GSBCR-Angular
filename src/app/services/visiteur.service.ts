import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VisiteurService {

    visiteurSubject = new Subject<any[]>();

    private visiteurs : any[] = [];

    constructor(private HttpClient: HttpClient) { }

    getConnexion(login,mdp) {
        this.HttpClient.get<any[]>('http://172.29.1.31/Mael/GSBCR-Angular/server/?param=connexion&login='+login+'&mdp='+mdp).subscribe((responce) => {
            this.visiteurs = responce;
        }),(error)=>{
            console.log('erreur : ' + error);
        }
        this.emitVisiteurSubject();
    }

    emitVisiteurSubject(){
        this.visiteurSubject.next(this.visiteurs.slice());
    }
    
    getVisiteur(){
        return this.visiteurs;
    }
}