import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CodeComponent } from './component/code-component/code-component';
import { VisualComponent } from './component/visual/visual.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [CodeComponent, VisualComponent],
  imports: [MaterialModule],
  exports: [CodeComponent, VisualComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
