import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation-emulated',
  templateUrl: './encapsulation-emulated.component.html',
  styleUrls: ['./encapsulation-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EncapsulationEmulatedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
