import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicamentService{

    medicamentSubject = new Subject<any[]>();

    private medicaments = [];

    constructor(private HttpClient : HttpClient){ }

    getMedicamentsFromServer(){
        this.HttpClient.get<any[]>('http://172.20.119.1/?param=getToutLesMedicaments').subscribe((responce) =>{
            this.medicaments = responce;
            this.emitMedicamentSubject();
        })
    }

    getMedicamentFromServerById($id){
        this.HttpClient.get<any[]>('http://172.20.119.1/?param=getToutLesMedicaments&id='+$id).subscribe((responce) =>{
            this.medicaments = responce;
            this.emitMedicamentSubject();
        })
    }

    emitMedicamentSubject(){
        this.medicamentSubject.next(this.medicaments.slice());
    }
}