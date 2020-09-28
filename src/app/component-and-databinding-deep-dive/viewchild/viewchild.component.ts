import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit {
  @ViewChild('localReference') viewChild;

  constructor() { }

  ngOnInit(): void {
  }

  localVal() {
    console.log(this.viewChild);
  }

}
