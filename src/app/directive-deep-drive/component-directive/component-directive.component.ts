import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-directive',
  template: "<p>{{ title }}</p><p>coming from component.",
  styleUrls: ['./component-directive.component.scss']
})
export class ComponentDirectiveComponent implements OnInit {
  title = 'component directive';
  constructor() { }

  ngOnInit(): void {
  }

}
