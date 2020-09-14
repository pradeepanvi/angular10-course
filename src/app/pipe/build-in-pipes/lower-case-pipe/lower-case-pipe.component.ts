import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lower-case-pipe',
  templateUrl: './lower-case-pipe.component.html',
  styleUrls: ['./lower-case-pipe.component.scss'],
})
export class LowerCasePipeComponent implements OnInit {
  pipeText = 'Rock the WORLD';
  caseP = `<p>The string to transform to {{ pipeText | lowercase }}</p>`;
  casePTS = `pipeText = 'Rock the WORLD';`;

  casePipeText = '';
  caseTSP = `<p>The string to transform to {{ casePipeText }}</p>`;
  caseTSPTS = `
  import { LowerCasePipe } from '@angular/common';
  pipeText = 'Rock the WORLD';
  casePipeText = '';
  constructor(private _lowerCasePipe: LowerCasePipe) {}
  
  ngOnInit(): void {
    this.casePipeText = this._lowerCasePipe.transform(this.pipeText);
  }
  `;
  moduleTS = `
  import { LowerCasePipe } from '@angular/common';
  @NgModule({
    providers: [LowerCasePipe],
  })  
  `;
  constructor(private _lowerCasePipe: LowerCasePipe) {}

  ngOnInit(): void {
    this.casePipeText = this._lowerCasePipe.transform(this.pipeText);
  }
}
