import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrls: ['./date-pipe.component.scss']
})
export class DatePipeComponent implements OnInit {
  birthday = new Date(1990, 9, 17) // since month parameter is zero - based;
  dateP = `<p>My birthday is {{ birthday | date }}</p>`;
  datePTS = `birthday = new Date(1990, 9, 17) // since month parameter is zero - based;`;

  shortOpt = `<p>My birthday is {{ birthday | date:'short' }}</p>`;
  shortOpt2 = `<p>My birthday is {{ birthday | date:'M/d/yy, h:mm a' }}</p>`;

  mediumOpt = `<p>My birthday is {{ birthday | date:'medium' }}</p>`;
  mediumOpt2 = `<p>My birthday is {{ birthday | date:'MMM d,y, h:mm:ss a' }}</p>`;

  longOpt = `<p>My birthday is {{ birthday | date:'long' }}</p>`;
  longOpt2 = `<p>My birthday is {{ birthday | date:'MMMM d, y, h:mm:ss a z' }}</p>`;

  fullOpt = `<p>My birthday is {{ birthday | date:'full' }}</p>`;
  fullOpt2 = `<p>My birthday is {{ birthday | date:'EEEE, MMMM d, y, h:mm:ss a zzzz' }}</p>`;

  shortDateOpt = `<p>My birthday is {{ birthday | date:'shortDate' }}</p>`;
  shortDateOpt2 = `<p>My birthday is {{ birthday | date:'M/d/yy' }}</p>`;

  mediumDateOpt = `<p>My birthday is {{ birthday | date:'mediumDate' }}</p>`;
  mediumDateOpt2 = `<p>My birthday is {{ birthday | date:'MMM d, y' }}</p>`;

  longDateOpt = `<p>My birthday is {{ birthday | date:'longDate' }}</p>`;
  longDateOpt2 = `<p>My birthday is {{ birthday | date:'MMMM d, y' }}</p>`;

  fullDateOpt = `<p>My birthday is {{ birthday | date:'fullDate' }}</p>`;
  fullDateOpt2 = `<p>My birthday is {{ birthday | date:'EEEE, MMMM d, y' }}</p>`;

  shortTimeOpt = `<p>My birthday is {{ birthday | date:'shortTime' }}</p>`;
  shortTimeOpt2 = `<p>My birthday is {{ birthday | date:'h:mm a' }}</p>`;

  mediumTimeOpt = `<p>My birthday is {{ birthday | date:'mediumTime' }}</p>`;
  mediumTimeOpt2 = `<p>My birthday is {{ birthday | date:'h:mm:ss a' }}</p>`;

  longTimeOpt = `<p>My birthday is {{ birthday | date:'longTime' }}</p>`;
  longTimeOpt2 = `<p>My birthday is {{ birthday | date:'h:mm:ss a z' }}</p>`;

  fullTimeOpt = `<p>My birthday is {{ birthday | date:'fullTime' }}</p>`;
  fullTimeOpt2 = `<p>My birthday is {{ birthday | date:'h:mm:ss a zzzz' }}</p>`;

  constructor() { }

  ngOnInit(): void {
  }

}
