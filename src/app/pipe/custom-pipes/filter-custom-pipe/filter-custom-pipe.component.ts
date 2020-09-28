import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-custom-pipe',
  templateUrl: './filter-custom-pipe.component.html',
  styleUrls: ['./filter-custom-pipe.component.scss'],
})
export class FilterCustomPipeComponent implements OnInit {
  term = '';
  list = [
    { name: 'John', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Sohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Dohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Cohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Bohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Aohn', joining_date: '23 / 10 / 2015', age: 23 },
  ];
  dataHTML = `
  <div class="form-group">
    <input
      class="form-control"
      type="text"
      placeholder="Filter"
      [(ngModel)]="term"
    />
  </div>
  <table class="table">
    <thead>
      <th>Name</th>
      <th>Joining Date</th>
      <th>Age</th>
    </thead>
    <tbody>
      <tr *ngFor="let user of list | filter: term">
        <td>{{ user.name }}</td>
        <td>{{ user.joining_date }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>  
  `;
  dataTS = `
  term = '';
  list = [
    { name: 'John', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Sohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Dohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Cohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Bohn', joining_date: '23 / 10 / 2015', age: 23 },
    { name: 'Aohn', joining_date: '23 / 10 / 2015', age: 23 },
  ];`;

  dataPipeTS = `
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'filter',
  })
  export class FilterPipe implements PipeTransform {
    transform(value: any, term: any): any {
      //check if search term is undefined
      if (value === undefined) return value;
      // return updated value
      return value.filter((val) => {
        return val.name.toLowerCase().includes(term.toLowerCase());
      });
    }
  }
  `;
  dataModuleTS = `
  @NgModule({
    declarations: [
      FilterPipe,
    ],
    exports: [FilterPipe],
  })`;
  constructor() {}

  ngOnInit(): void {}
}
