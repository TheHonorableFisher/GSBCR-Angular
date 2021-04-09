import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MedicamentService } from "../services/medicament.service";

@Component({
  selector: 'app-medicament-view',
  templateUrl: './medicament-view.component.html',
  styleUrls: ['./medicament-view.component.css']
})
export class MedicamentViewComponent implements OnInit {

  medicaments: any[];
  medicamentSubscription : Subscription;

  @Input() medicamentImg: string;
  @Input() medicamentNom: string;
  @Input() medicamentDesc: string;
  @Input() medicamentEffetIndesirable: string;

  constructor(private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe((medicaments: any[])=>{
      this.medicaments = medicaments;
    });
    this.medicamentService.emitMedicamentSubject();

    // appel pour récupérer les médicament sinon ça marche pas
    this.medicamentService.getMedicamentsFromServer();

    console.log(this.medicaments);
  }

}
