import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  title = 'This is Home Component!';
  newHtml = '<p>Hi This is <strong>inner HTML!</strong></p>';
  btnState = true;
  active = "btn btn-primary";
  actionNameAtr = 'Action Name';
  classState = true;

  //style
  widthStr = "500px";
  widthUnit = 500;
  styleMulti = "width: 500px; height: 100px";
  styleObj = { width: '500px', height: '100px' };
  styleArray = ['width', '500px'];

  constructor() { }

  ngOnInit(): void {
  }

  changeVal(event: Event) {
    console.log(event);
  }

  clickBtn(event: Event) {
    console.log(event);
  }

}
