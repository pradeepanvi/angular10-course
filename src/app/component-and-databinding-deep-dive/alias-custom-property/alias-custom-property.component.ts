import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alias-custom-property',
  templateUrl: './alias-custom-property.component.html',
  styleUrls: ['./alias-custom-property.component.scss']
})
export class AliasCustomPropertyComponent implements OnInit {
  @Input('srcElement') working: any;

  constructor() { }

  ngOnInit(): void {
  }

}
