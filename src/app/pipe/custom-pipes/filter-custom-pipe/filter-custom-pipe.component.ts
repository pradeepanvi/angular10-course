import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-custom-pipe',
  templateUrl: './filter-custom-pipe.component.html',
  styleUrls: ['./filter-custom-pipe.component.scss'],
})
export class FilterCustomPipeComponent implements OnInit {
  term;
  list = [
    { name: 'John', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Sohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Dohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Cohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Bohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Aohn', joining_date: '23 / 10 / 2015', age: 23 },
  ];
  dataHTML = ``;
  dataTS = ``;
  dataModuleTS = ``;
  constructor() {}

  ngOnInit(): void {}
}
