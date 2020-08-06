import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive',
  templateUrl: './custom-structural-directive.component.html',
  styleUrls: ['./custom-structural-directive.component.scss']
})
export class CustomStructuralDirectiveComponent implements OnInit {
  strIf = true;

  appUnlessD = `<p *appUnless="!strIf">This text will show when value will true</p>`;
  appUnlessDTS = `strIf = true;`;
  appUnlessCustomDTS = `
  import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

  @Directive({
      selector: '[appUnless]'
  })

  export class UnlessDirective {
      @Input() set appUnless(condition: boolean) {
          if (!condition) {
              this.vcRef.createEmbeddedView(this._templateRef);
          } else {
              this.vcRef.clear();
          }
      }

      constructor(private _templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  }
  `;

  constructor() { }

  ngOnInit(): void {
  }

}
