import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { CurrencyPipeComponent } from './build-in-pipes/currency-pipe/currency-pipe.component';
import { DatePipeComponent } from './build-in-pipes/date-pipe/date-pipe.component';
import { DecimalPipeComponent } from './build-in-pipes/decimal-pipe/decimal-pipe.component';
import { LowerCasePipeComponent } from './build-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { PercentPipeComponent } from './build-in-pipes/percent-pipe/percent-pipe.component';
import { TitleCasePipeComponent } from './build-in-pipes/title-case-pipe/title-case-pipe.component';
import { UpperCasePipeComponent } from './build-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { FilterCustomPipeComponent } from './custom-pipes/filter-custom-pipe/filter-custom-pipe.component';
import { StrengthCustomPipeComponent } from './custom-pipes/strength-custom-pipe/strength-custom-pipe.component';
import { PipeComponent } from './pipe.component';

const route: Routes = [
  {
    path: '',
    component: PipeComponent,
    children: [
      { path: '', component: BuildInPipesComponent },
      { path: 'date-pipe', component: DatePipeComponent },
      { path: 'upper-case-pipe', component: UpperCasePipeComponent },
      { path: 'lower-case-pipe', component: LowerCasePipeComponent },
      { path: 'title-case-pipe', component: TitleCasePipeComponent },
      { path: 'currency-pipe', component: CurrencyPipeComponent },
      { path: 'decimal-pipe', component: DecimalPipeComponent },
      { path: 'percent-pipe', component: PercentPipeComponent },
      { path: 'strengh-custom-pipe', component: StrengthCustomPipeComponent },
      { path: 'filter-custom-pipe', component: FilterCustomPipeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PipeRoutingModule {}
