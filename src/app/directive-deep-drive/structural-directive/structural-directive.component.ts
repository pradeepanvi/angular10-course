import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {
  strIf = true;
  strFor = [
    { name: 'Pradeep', age: 29 },
    { name: 'Abhinav', age: 30 },
    { name: 'Varun', age: 40 }
  ]
  ngSwitchValue = "pradeep";

  ngIfD = `<p *ngIf="strIf">This text will show when value will true</p>`;
  ngIfDTS = `strIf = true;`;
  ngTemplateIfD = `
  <ng-template [ngIf]="strIf">
        <div>This text will show when value will true</div>
    </ng-template>`;

  ngForD = `
  <ul>
        <li *ngFor="let person of strFor">{{ person.name}} | {{ person.age }}</li>
    </ul>`;
  ngForDTS = `
  strFor = [
    { name: 'Pradeep', age: 29 },
    { name: 'Abhinav', age: 30 },
    { name: 'Varun', age: 40 }
  ]`;
  ngTemplateForD = `
  <ng-template ngFor let-person [ngForOf]="strFor" let-i="index">
        <p>{{i}} {{ person.name }} and age {{ person.age }}</p>
    </ng-template>`;

  ngSwitchD = `
  <ul [ngSwitch]="ngSwitchValue">
        <li *ngSwitchCase="'pradeep'"> Age 30</li>
    </ul>`;
  ngSwitchDTS = `ngSwitchValue = "pradeep";`;
  ngTemplateSwitchD = `
  <ul [ngSwitch]="ngSwitchValue">
        <ng-template [ngSwitchCase]="'pradeep'">
            <li> Age 30</li>
        </ng-template>
    </ul>`;

  ngContainerIfD = `<p>We are seeing <ng-container *ngIf="strIf">ng-container content</ng-container> structural</p>`;

  constructor() { }

  ngOnInit(): void {
  }

}
