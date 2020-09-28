import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-shadowdom',
  templateUrl: './encapsulation-shadowdom.component.html',
  styleUrls: ['./encapsulation-shadowdom.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulationShadowdomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
