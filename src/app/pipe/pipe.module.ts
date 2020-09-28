import {
  CommonModule,
  DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PipeRoutingModule } from './pipe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PipeComponent } from './pipe.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { DatePipeComponent } from './build-in-pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './build-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './build-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { CurrencyPipeComponent } from './build-in-pipes/currency-pipe/currency-pipe.component';
import { TitleCasePipeComponent } from './build-in-pipes/title-case-pipe/title-case-pipe.component';
import { DecimalPipeComponent } from './build-in-pipes/decimal-pipe/decimal-pipe.component';
import { PercentPipeComponent } from './build-in-pipes/percent-pipe/percent-pipe.component';
import { StrengthCustomPipeComponent } from './custom-pipes/strength-custom-pipe/strength-custom-pipe.component';
import { StrengthPipe } from './custom-pipes/strength-custom-pipe/strength.pipe';
import { FilterCustomPipeComponent } from './custom-pipes/filter-custom-pipe/filter-custom-pipe.component';
import { FilterPipe } from './custom-pipes/filter-custom-pipe/filter.pipe';

@NgModule({
  declarations: [
    PipeComponent,
    BuildInPipesComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    CurrencyPipeComponent,
    TitleCasePipeComponent,
    DecimalPipeComponent,
    PercentPipeComponent,
    StrengthCustomPipeComponent,
    StrengthPipe,
    FilterCustomPipeComponent,
    FilterPipe,
  ],
  imports: [CommonModule, PipeRoutingModule, SharedModule],
  exports: [StrengthPipe, FilterPipe],
  providers: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipeModule {}
