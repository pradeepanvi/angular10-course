import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ng-after-view-init',
  templateUrl: './ng-after-view-init.component.html',
  styleUrls: ['./ng-after-view-init.component.scss']
})
export class NgAfterViewInitComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

}
