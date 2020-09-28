import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss'],
})
export class CurrencyPipeComponent implements OnInit {
  amountA = 0.259;
  amountB = 1.395;

  currencyP = `
  <p>{{ amountA | currency }}</p>
  <p>{{ amountB | currency }}</p>
  `;
  currencyPTS = `
  amountA = 0.259;
  amountB = 1.395;
  `;

  currencyCodeP = `
  <p>{{ amountA | currency: "CAD" }}</p>
  <p>{{ amountB | currency: "CAD" }}</p>
  `;

  constructor() {}

  ngOnInit(): void {}
}
