import { Component, Input, OnInit } from '@angular/core';
import { RapportService } from '../services/rapport.service';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {

  @Input() rapportID : string;
  @Input() rapportMotif : string;
  @Input() rapportBilan : string;
  @Input() rapportDate: string;
  @Input() rapportMedecin : string;
  @Input() id : number;

  constructor(private rapportservice: RapportService) { }

  ngOnInit(): void {
    
  }

}
