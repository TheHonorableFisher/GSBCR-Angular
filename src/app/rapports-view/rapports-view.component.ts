import { Component, Input, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { RapportService} from '../services/rapport.service';

@Component({
  selector: 'app-rapports-view',
  templateUrl: './rapports-view.component.html',
  styleUrls: ['./rapports-view.component.css']
})
export class RapportsViewComponent implements OnInit {

  rapports: any[];
  rapportSubscription: Subscription;

  @Input() rapportID: string;
  @Input() visiteurID : string;
  @Input() medecinID : string;

  constructor(private rapportService: RapportService) { }

  ngOnInit(): void {
    this.rapportSubscription = this.rapportService.rapportSubject.subscribe((rapports: any[]) =>{
      this.rapports = rapports;
    });
    this.rapportService.emitRapportSubject();

    // appel pour récupérer les rapports sinon ça marche pas
    this.rapportService.getRapportsFromServer();
  }

  ngOnDestroy(){
    this.rapportSubscription.unsubscribe();
  }

}
