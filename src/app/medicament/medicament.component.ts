import { Component, OnInit, Input } from '@angular/core';
import { MedicamentService } from '../services/medicament.service';
@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  @Input() medicamentImg: string;
  @Input() medicamentNom: string;
  @Input() medicamentDesc: string;
  @Input() medicamentEffetIndesirable: string;

  constructor(private medicamentService : MedicamentService) { }

  ngOnInit(): void {
  }

}
