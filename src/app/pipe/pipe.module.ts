import {
  CommonModule,
  LowerCasePipe,
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

@NgModule({
  declarations: [
    PipeComponent,
    BuildInPipesComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    CurrencyPipeComponent,
    TitleCasePipeComponent,
  ],
  imports: [CommonModule, PipeRoutingModule, SharedModule],
  providers: [UpperCasePipe, LowerCasePipe, TitleCasePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PipeModule {}
