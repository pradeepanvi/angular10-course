import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-event',
  templateUrl: './custom-event.component.html',
  styleUrls: ['./custom-event.component.scss']
})
export class CustomEventComponent implements OnInit {
  @Output() customEvent = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = 'Hello';
  newServerContent = 'Same';

  constructor() { }

  ngOnInit(): void {
  }

  customEventVal() {
    this.customEvent.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }

}
