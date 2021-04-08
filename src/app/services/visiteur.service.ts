import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VisiteurService {

    visiteurSubject = new Subject<any[]>();

    private visiteurs = [];

    constructor(private HttpClient : HttpClient) { }

    getConnexion($login, $mdp) {
        try {
            this.HttpClient.get<any[]>('http://172.20.119.1/?param=connexion&login=' + $login + '&mdp=' + $mdp).subscribe((responce) => {
                // Le problème vient que responce est un objet alors qu'il faudrait un array
                // https://stackoverflow.com/questions/51304884/error-typeerror-data-slice-is-not-a-function/51307283
                
                this.visiteurs = responce;
                this.emitVisiteurSubject();
            }), (error) => {
                console.log('erreur : ' + error);
            }
            
            return true;
        } catch (error) {
            return false;
        }
    }

    emitVisiteurSubject() {
        this.visiteurSubject.next(this.visiteurs.slice());
    }

    getVisiteur() {
        return this.visiteurs;
    }
}