import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RapportService{

    rapportSubject = new Subject<any[]>();

    private rapports = [];

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

    emitRapportSubject(){
        this.rapportSubject.next(this.rapports.slice());
    }
}