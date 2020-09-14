import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-upper-case-pipe',
  templateUrl: './upper-case-pipe.component.html',
  styleUrls: ['./upper-case-pipe.component.scss'],
})
export class UpperCasePipeComponent implements OnInit {
  pipeText = 'rock the world';
  caseP = `<p>The string to transform to {{ pipeText | uppercase }}</p>`;
  casePTS = `pipeText = 'rock the world';`;

  casePipeText = '';
  caseTSP = `<p>The string to transform to {{ casePipeText }}</p>`;
  caseTSPTS = `
  import { UpperCasePipe } from '@angular/common';
  pipeText = 'rock the world';
  casePipeText = '';
  constructor(private _upperCasePipe: UpperCasePipe) {}
  
  ngOnInit(): void {
    this.casePipeText = this._upperCasePipe.transform(this.pipeText);
  }
  `;
  moduleTS = `
  import { UpperCasePipe } from '@angular/common';
  @NgModule({
    providers: [UpperCasePipe],
  })  
  `;

  constructor(private _upperCasePipe: UpperCasePipe) {}

  ngOnInit(): void {
    this.casePipeText = this._upperCasePipe.transform(this.pipeText);
  }
}
