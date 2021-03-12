import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicamentService{

    medicamentSubject = new Subject<any[]>();

    private medicaments = [];

    constructor(private HttpClient : HttpClient){ }

    getMedicamentsFromServer(){
        this.HttpClient.get<any[]>('http://172.29.1.31/Mael/GSBCR-Angular/server/?param=getToutLesMedicaments').subscribe((responce) =>{
            this.medicaments = responce;
            this.emitMedicamentSubject();
        })
    }

    getMedicamentFromServerById($id){
        this.HttpClient.get<any[]>('http://172.29.1.31/Mael/GSBCR-Angular/server/?param=getToutLesMedicaments&id='+$id).subscribe((responce) =>{
            this.medicaments = responce;
            this.emitMedicamentSubject();
        })
    }

    emitMedicamentSubject(){
        this.medicamentSubject.next(this.medicaments.slice());
    }
}