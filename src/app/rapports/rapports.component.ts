import { Component, Input, OnInit } from '@angular/core';
import { RapportService } from '../services/rapport.service';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styleUrls: ['./rapports.component.css']
})
export class RapportsComponent implements OnInit {

  @Input() rapportID : string;
  @Input() visiteurID : string;
  @Input() medecinID : string;

  constructor(private rapportservice: RapportService) { }

  ngOnInit(): void {
  }

}
