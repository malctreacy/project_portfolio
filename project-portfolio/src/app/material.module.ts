import { NgModule } from '@angular/core';
import {MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioButton, MatRadioModule} from '@angular/material';

@NgModule({
  imports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule],
  exports: [MatCardModule, MatDividerModule, MatProgressBarModule, MatButtonModule, MatRadioModule],
})
export class MaterialModule { }
