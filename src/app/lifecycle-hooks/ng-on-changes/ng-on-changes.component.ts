import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log('ngOnChanges Called!');
  }

}
