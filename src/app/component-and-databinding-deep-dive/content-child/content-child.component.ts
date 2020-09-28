import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit, AfterContentInit {
  @ContentChild('contentChildRef') contentChild;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.contentChild);
  }

}
