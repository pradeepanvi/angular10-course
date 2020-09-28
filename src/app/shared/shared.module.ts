import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CodeComponent } from './component/code-component/code-component';
import { VisualComponent } from './component/visual/visual.component';
import { MaterialModule } from './material.module';
import { HighlightModule } from 'ngx-highlightjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CodeComponent, VisualComponent],
  imports: [CommonModule, MaterialModule, HighlightModule, FormsModule],
  exports: [MaterialModule, CodeComponent, VisualComponent, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
