import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alias-custom-event',
  templateUrl: './alias-custom-event.component.html',
  styleUrls: ['./alias-custom-event.component.scss']
})
export class AliasCustomEventComponent implements OnInit {
  @Output('aliasEvent') customEvent = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = 'Hello';
  newServerContent = 'Same';

  constructor() { }

  ngOnInit(): void {
  }

  customEventVal() {
    console.log('hello');
    this.customEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

}
