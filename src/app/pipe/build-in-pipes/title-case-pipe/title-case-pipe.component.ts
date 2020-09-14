import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-case-pipe',
  templateUrl: './title-case-pipe.component.html',
  styleUrls: ['./title-case-pipe.component.scss'],
})
export class TitleCasePipeComponent implements OnInit {
  pipeText = 'Rock the WORLD';
  caseP = `<p>The string to transform to {{ pipeText | titlecase }}</p>`;
  casePTS = `pipeText = 'Rock the WORLD';`;

  casePipeText = '';
  caseTSP = `<p>The string to transform to {{ casePipeText }}</p>`;
  caseTSPTS = `
  import { TitleCasePipe } from '@angular/common';
  pipeText = 'Rock the WORLD';
  casePipeText = '';
  constructor(private _titleCasePipe: TitleCasePipe) {}
  
  ngOnInit(): void {
    this.casePipeText = this._titleCasePipe.transform(this.pipeText);
  }
  `;
  moduleTS = `
  import { TitleCasePipe } from '@angular/common';
  @NgModule({
    providers: [TitleCasePipe],
  })  
  `;
  constructor(private _titleCasePipe: TitleCasePipe) {}

  ngOnInit(): void {
    this.casePipeText = this._titleCasePipe.transform(this.pipeText);
  }
}
