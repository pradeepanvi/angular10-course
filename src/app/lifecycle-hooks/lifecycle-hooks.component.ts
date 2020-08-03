import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {
  ngOnChangesH = `
  <app-ng-on-changes></app-ng-on-changes>`;
  ngOnChangesHTS = ``;
  ngOnChangesHChild = ``;
  ngOnChangesHTSChild = `
    ngOnChanges() {
    console.log('ngOnChanges Called!');
  }
  `;
  ngOnInitH = `
  <app-ng-on-init></app-ng-on-init>`;
  ngOnInitHTS = ``;
  ngOnInitHChild = ``;
  ngOnInitHTSChild = `
    ngOnInit(): void {
    console.log('ngOnInit called!')
  }
  `;

  ngDoCheckH = `
  <app-ng-do-check></app-ng-do-check>`;
  ngDoCheckHTS = ``;
  ngDoCheckHChild = ``;
  ngDoCheckHTSChild = `
    ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  `;

  ngAfterContentInitH = `
  <app-ng-after-content-init></app-ng-after-content-init>`;
  ngAfterContentInitHTS = ``;
  ngAfterContentInitHChild = ``;
  ngAfterContentInitHTSChild = `
    ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    }
  `;

  ngAfterContentCheckedH = `
  <app-ng-after-content-checked></app-ng-after-content-checked>`;
  ngAfterContentCheckedHTS = ``;
  ngAfterContentCheckedHChild = ``;
  ngAfterContentCheckedHTSChild = `
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }`;

  ngAfterViewInitH = `
  <app-ng-after-view-init></app-ng-after-view-init>`;
  ngAfterViewInitHTS = ``;
  ngAfterViewInitHChild = ``;
  ngAfterViewInitHTSChild = `
    ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }
  `;

  ngAfterViewCheckedH = `
  <app-ng-after-view-checked></app-ng-after-view-checked>`;
  ngAfterViewCheckedHTS = ``;
  ngAfterViewCheckedHChild = ``;
  ngAfterViewCheckedHTSChild = `
    ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }
  `;

  ngOnDestroyH = `
  <app-ng-on-destroy></app-ng-on-destroy>`;
  ngOnDestroyHTS = ``;
  ngOnDestroyHChild = ``;
  ngOnDestroyHTSChild = `
    ngOnDestroy() {
    console.log('ngOnDestory called!');
  }
  `;

  subLinks = [
    { name: 'ngOnChanges', path: '#ngOnChanges' },
    { name: 'ngOnInit', path: '#ngOnInit' },
    { name: 'ngDoCheck', path: '#ngDoCheck' },
    { name: 'ngAfterContentInit', path: '#ngAfterContentInit' },
    { name: 'ngAfterContentChecked', path: '#ngAfterContentChecked' },
    { name: 'ngAfterViewInit', path: '#ngAfterViewInit' },
    { name: 'ngAfterViewChecked', path: '#ngAfterViewChecked' },
    { name: 'ngOnDestroy', path: '#ngOnDestroy' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
