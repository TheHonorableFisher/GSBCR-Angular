import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedecinService{

    medecinSubject = new Subject<any[]>();
    speSubject = new Subject<any[]>();

    private medecins = [];
    private spe = [];

    constructor(private HttpClient : HttpClient){ }

    
    getMedecinsFromServer(){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins').subscribe((responce) =>{
            this.medecins = responce;
            this.emitMedecinSubject();
        },(error)=>{
            console.log('Erreur : ' + error);
        })
    }

    getMedecinFromServerById(id){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins&id='+id).subscribe((responce) =>{
            this.medecins = responce;
            this.emitMedecinSubject();
        })
    }
    
    getMedecinFromServerByNom(nom){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins&nom='+nom).subscribe((responce) => {
            this.medecins=responce;
            this.emitMedecinSubject();
        })
    }

    getMedecinFromServerByDepartement(dep){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins&dep='+dep).subscribe((responce) => {
            this.medecins=responce;
            this.emitMedecinSubject();
        })
    }

    getMedecinFromServerBySpe(spe){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins&spe='+spe).subscribe((responce) => {
            this.medecins=responce;
            this.emitMedecinSubject();
        })
    }

    getMedecinSpecialiteFromServer(){
        this.HttpClient.get<any[]>('http://172.20.119.1/WebService/?param=getToutLesMedecins&spe=all').subscribe((responce) => {
            this.spe=responce;
            this.emitSpeSubject();
        })
    }

    emitMedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }
    
    emitSpeSubject(){
        this.speSubject.next(this.spe.slice());
    }
}