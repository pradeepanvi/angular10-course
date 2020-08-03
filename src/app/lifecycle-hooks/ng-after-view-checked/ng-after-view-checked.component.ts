import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-checked',
  templateUrl: './ng-after-view-checked.component.html',
  styleUrls: ['./ng-after-view-checked.component.scss']
})
export class NgAfterViewCheckedComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

}
