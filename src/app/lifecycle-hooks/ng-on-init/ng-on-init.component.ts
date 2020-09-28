import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  templateUrl: './ng-on-init.component.html',
  styleUrls: ['./ng-on-init.component.scss']
})
export class NgOnInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called!')
  }

}
