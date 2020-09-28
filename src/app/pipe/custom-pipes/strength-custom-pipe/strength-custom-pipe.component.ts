import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strength-custom-pipe',
  templateUrl: './strength-custom-pipe.component.html',
  styleUrls: ['./strength-custom-pipe.component.scss'],
})
export class StrengthCustomPipeComponent implements OnInit {
  dataHTML = `
  <p>Power {{ 2 | strength: 10 }}</p>`;

  dataTS = `
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'strength',
    pure: false,
  })
  export class StrengthPipe implements PipeTransform {
    transform(value: number, exponent?: number): number {
      return Math.pow(value, isNaN(exponent) ? 1 : exponent);
    }
  }
  
  `;

  dataModuleTS = `
  @NgModule({
    declarations: [
      StrengthPipe,
    ],
    exports: [StrengthPipe],
  })  
  `;
  constructor() {}

  ngOnInit(): void {}
}
