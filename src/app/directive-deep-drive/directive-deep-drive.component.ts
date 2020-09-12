import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-deep-drive',
  templateUrl: './directive-deep-drive.component.html',
  styleUrls: ['./directive-deep-drive.component.scss']
})
export class DirectiveDeepDriveComponent implements OnInit {
  componentDTS = ``;
  componentDTSChild = `
@Component({
  selector: 'app-component-directive',
  template: "< p > {{ title }}</p><p>coming from component.",
styleUrls: ['./component-directive.component.scss']
})
export class ComponentDirectiveComponent implements OnInit {
  title = 'component directive';
  constructor() { }

  ngOnInit(): void {
  }

}  `;

  constructor() { }

  ngOnInit(): void {
  }

}
