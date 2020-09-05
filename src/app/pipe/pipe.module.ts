import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipeComponent } from './pipe.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { DatePipeComponent } from './build-in-pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent } from './build-in-pipes/upper-case-pipe/upper-case-pipe.component';
import { LowerCasePipeComponent } from './build-in-pipes/lower-case-pipe/lower-case-pipe.component';
import { CurrencyPipeComponent } from './build-in-pipes/currency-pipe/currency-pipe.component';
import { PipeRoutingModule } from './pipe-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CodeComponent } from '../shared/component/code-component/code-component';

export class PipeModule {}
