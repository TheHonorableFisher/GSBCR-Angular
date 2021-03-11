import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.css']
})
export class FourOhFourComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(){
    this._document.body.style.background = '#141019';
    this._document.body.style.background = 'radial-gradient(at 50% -20%, #908392, #0d060e) fixed';
  }

  ngOnDestroy(){
    this._document.body.style.background = '';
  }

}
