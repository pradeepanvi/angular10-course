import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-and-databinding-deep-dive',
  templateUrl: './component-and-databinding-deep-dive.component.html',
  styleUrls: ['./component-and-databinding-deep-dive.component.scss'],
})
export class ComponentAndDatabindingDeepDiveComponent implements OnInit {
  workingTxt = 'yes it is';
  customPropertyBinding = `
  <app-deep-dive [working]="workingTxt"></app-deep-dive>`;
  customPropertyBindingChild = `
  <p>This is a child component from deep dive</p>
  <p>{{ working }}</p>`;
  customPropertyBindingTS = `
  workingTxt = 'yes it is';`;
  customPropertyBindingTSChild = `
  @Input() working: any;`;

  aliasCustomPropertyBinding = `
  <app-alias-custom-property [srcElement]="workingTxt"></app-alias-custom-property>`;
  aliasCustomPropertyBindingTS = `
  workingTxt = 'yes it is';`;
  aliasCustomPropertyBindingChild = `
  <p>This is a child component from alias custom property</p>
  <p>{{ working }}</p>`;
  aliasCustomPropertyBindingTSChild = `
  @Input('srcElement') working: any;`;

  customEventElement = [
    { type: 'server', name: 'Testserver', content: 'Just a test!' },
  ];
  customEventBinding = `
  <app-custom-event (customEvent)="onCustomEvent($event)"></app-custom-event>
            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Name</td>
                        <td>Content</td>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let server of customEventElement">
                        <td>{{server.type}}</td>
                        <td>{{server.name}}</td>
                        <td>{{server.content}}</td>
                    </tr>
                </tbody>
            </table>`;
  customEventBindingTS = `
    customEventElement = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
    onCustomEvent(serverData) {
    this.customEventElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
    `;
  customEventBindingChild = `
  <p>This is a child component from deep dive</p>
  <button (click)="customEventVal()">Custom Event</button>
  `;
  customEventBindingTSChild = `
  @Output() customEvent = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = 'Hello';
  newServerContent = 'Same';  

  customEventVal() {
    this.customEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  `;

  aliasCustomEventBinding = `
            <app-custom-event (aliasEvent)="onCustomEvent($event)"></app-custom-event>
            <hr>
            <table class="table">
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Name</td>
                        <td>Content</td>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let server of customEventElement">
                        <td>{{server.type}}</td>
                        <td>{{server.name}}</td>
                        <td>{{server.content}}</td>
                    </tr>
                </tbody>
            </table> 
  `;
  aliasCustomEventBindingTS = `
    customEventElement = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
    onCustomEvent(serverData) {
    this.customEventElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  `;
  aliasCustomEventBindingChild = `
  <p>This is a child component from deep dive</p>
<button (click)="customEventVal()">Custom Event</button>`;
  aliasCustomEventBindingTSChild = `
  @Output('aliasEvent') customEvent = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = 'Hello';
  newServerContent = 'Same';

  customEventVal() {
    this.customEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
  `;

  encapsulationNone = `
  <app-encapsulation-none></app-encapsulation-none>`;
  encapsulationNoneTS = `
  @Component({
  selector: 'app-encapsulation-none',
  templateUrl: './encapsulation-none.component.html',
  styleUrls: ['./encapsulation-none.component.scss'],
  encapsulation: ViewEncapsulation.None
  })`;
  encapsulationNative = `
  <app-encapsulation-native></app-encapsulation-native>`;
  encapsulationNativeTS = `
  @Component({
  selector: 'app-encapsulation-native',
  templateUrl: './encapsulation-native.component.html',
  styleUrls: ['./encapsulation-native.component.scss'],
  encapsulation: ViewEncapsulation.Native
  })`;
  encapsulationEmulated = `
  <app-encapsulation-emulated></app-encapsulation-emulated>`;
  encapsulationEmulatedTS = `
  @Component({
  selector: 'app-encapsulation-emulated',
  templateUrl: './encapsulation-emulated.component.html',
  styleUrls: ['./encapsulation-emulated.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  })`;
  localReference = `
  <input #localReference type="text" class="form-control">
  <button (click)="localVal(localReference)">Local Reference Btn</button>`;
  localReferenceTS = `
    localVal(InputValue) {
    console.log(InputValue);
  }`;
  viewChildRef = `
<input #localReference type="text" class="form-control">
<button (click)="localVal()">Local Reference Btn</button>`;
  viewChildRefTS = `
  @ViewChild('localReference') viewChild;

  localVal() {
    console.log(this.viewChild);
  }
  `;
  ngContent = `
            <app-ng-content>
                <p>This content from ng content</p>
            </app-ng-content>  `;
  ngContentTS = ``;
  ngContentChild = `
  <ng-content></ng-content>`;
  ngContentTSChild = ``;

  contentChild = `
  <app-content-child>
                <p #contentChild>This content from ng content</p>
            </app-content-child>`;
  contentChildTS = ``;
  contentChildChild = `<ng-content></ng-content>`;
  contentChildTSChild = `
  @ContentChild('contentChild') contentChildRef;
  ngAfterContentInit() {
    console.log(this.contentChildRef);
  }
  `;

  constructor() {}

  ngOnInit(): void {}

  onCustomEvent(serverData) {
    this.customEventElement.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
}
