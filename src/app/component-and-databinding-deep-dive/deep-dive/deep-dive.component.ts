import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deep-dive',
  templateUrl: './deep-dive.component.html',
  styleUrls: ['./deep-dive.component.scss']
})
export class DeepDiveComponent implements OnInit {
  @Input() working: any;

  constructor() { }

  ngOnInit(): void {
  }

}
