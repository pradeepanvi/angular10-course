import { PercentPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percent-pipe',
  templateUrl: './percent-pipe.component.html',
  styleUrls: ['./percent-pipe.component.scss'],
})
export class PercentPipeComponent implements OnInit {
  num2 = 2.718281828459045;
  percentP = `
  <p>{{ num2 | percent }}</p>
  <p>{{ num2 | percent: "3.1-5" }}</p>
  <p>{{ num2 | percent: "4.5-5" }}</p>
  `;
  percentPTS = `
  num2 = 2.718281828459045;
  `;

  onlyPercent;
  percentWithlength;
  percentWithlength2;

  percentTSP = `
  <p>{{ onlyPercent }}</p>
  <p>{{ percentWithlength }}</p>
  <p>{{ percentWithlength2 }}</p>`;
  percentTSPTS = `
  import { PercentPipe } from '@angular/common';
  onlyPercent;
  percentWithlength;
  percentWithlength2;
  constructor(private _percentPipe: PercentPipe) {}

  ngOnInit(): void {
    this.onlyPercent = this._percentPipe.transform(this.num2);
    this.percentWithlength = this._percentPipe.transform(this.num2, '3.1-5');
    this.percentWithlength2 = this._percentPipe.transform(this.num2, '4.5-5');
  }  
  `;

  constructor(private _percentPipe: PercentPipe) {}

  ngOnInit(): void {
    this.onlyPercent = this._percentPipe.transform(this.num2);
    this.percentWithlength = this._percentPipe.transform(this.num2, '3.1-5');
    this.percentWithlength2 = this._percentPipe.transform(this.num2, '4.5-5');
  }
}
