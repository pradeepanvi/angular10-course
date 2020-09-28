import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-content-init',
  templateUrl: './ng-after-content-init.component.html',
  styleUrls: ['./ng-after-content-init.component.scss']
})
export class NgAfterContentInitComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

}
