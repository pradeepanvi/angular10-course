import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.scss']
})
export class LocalReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  localVal(InputValue) {
    console.log(InputValue);
  }

}
