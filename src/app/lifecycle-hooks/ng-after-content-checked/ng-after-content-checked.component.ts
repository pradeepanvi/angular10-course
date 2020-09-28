import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-checked',
  templateUrl: './ng-after-content-checked.component.html',
  styleUrls: ['./ng-after-content-checked.component.scss']
})
export class NgAfterContentCheckedComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

}
