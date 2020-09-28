import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.scss']
})
export class NgOnDestroyComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('ngOnDestory called!');
  }

}
