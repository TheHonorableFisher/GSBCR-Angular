import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RapportService{

    rapportSubject = new Subject<any[]>();

    private rapports = [];

    private liste = [];

    constructor(private HttpClient : HttpClient){ }

    getRapportsFromServer($id){
        this.HttpClient.get<any[]>('http://172.20.119.1/?param=getToutLesRapports&uti='+$id).subscribe((responce) =>{
            this.rapports = responce;
            this.emitRapportSubject();
        })
    }

    getRapportFromServerById($id){
        this.HttpClient.get<any[]>('http://172.20.119.1/?param=getToutLesRapports&id='+$id).subscribe((responce) =>{
            this.rapports = responce;
            this.emitRapportSubject();
        })
    }

    sendRapportToServer($liste){
        this.HttpClient.get<any[]>('http://172.20.119.1/?param=addRapport&idVisiteur='+$liste['idVisiteur']+"&idMedecin="+$liste['idMedecin']+"&bilan="+$liste['bilan']+"&motif="+$liste['motif']).subscribe((responce)=>{
            console.log(responce);
        })
    }

    emitRapportSubject(){
        this.rapportSubject.next(this.rapports.slice());
    }
}