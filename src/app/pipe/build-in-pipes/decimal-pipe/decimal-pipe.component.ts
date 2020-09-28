import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decimal-pipe',
  templateUrl: './decimal-pipe.component.html',
  styleUrls: ['./decimal-pipe.component.scss'],
})
export class DecimalPipeComponent implements OnInit {
  num2 = 2.718281828459045;
  decimalP = `
  <p>{{ num2 | number }}</p>
  <p>{{ num2 | number: "3.1-5" }}</p>
  <p>{{ num2 | number: "4.5-5" }}</p>
  `;
  decimalPTS = `
  num2 = 2.718281828459045;
  `;

  onlyNumber;
  numberWithlength;
  numberWithlength2;

  decimalTSP = `
  <p>{{ onlyNumber }}</p>
  <p>{{ numberWithlength }}</p>
  <p>{{ numberWithlength2 }}</p>`;

  decimalTSPTS = `
  import { DecimalPipe } from '@angular/common';
  onlyNumber;
  numberWithlength;
  numberWithlength2;
  constructor(private readonly _decimalPipe: DecimalPipe) {}

  ngOnInit(): void {
    this.onlyNumber = this._decimalPipe.transform(this.num2);
    this.numberWithlength = this._decimalPipe.transform(this.num2, '3.1-5');
    this.numberWithlength2 = this._decimalPipe.transform(this.num2, '4.5-5');
  }
  `;

  constructor(private _decimalPipe: DecimalPipe) {}

  ngOnInit(): void {
    this.onlyNumber = this._decimalPipe.transform(this.num2);
    this.numberWithlength = this._decimalPipe.transform(this.num2, '3.1-5');
    this.numberWithlength2 = this._decimalPipe.transform(this.num2, '4.5-5');
  }
}
